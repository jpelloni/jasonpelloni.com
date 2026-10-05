# jasonpelloni.com

Personal site: a Next.js app (`apps/web`, App Router) built as a static export and hosted on a private S3 bucket behind CloudFront.

## Local development

```sh
npm ci
npm run dev      # http://localhost:3000
npm run build    # outputs apps/web/out
npm start        # preview the production build
npm run lint
```

`npm start` serves the last `npm run build` output at http://localhost:3000.
Stop either server with Ctrl+C.

### Testing locally

`next build` pre-renders every route in `apps/web/src/app/` to its own HTML file (`/about` → `out/about.html`), with that page's title and description from `apps/web/src/lib/pages.js`. `npm start` serves `/about` from `about.html` the same way production does; in production, the CloudFront Function in `infra/site/routing.js` adds the `.html`.

- **While editing:** use `npm run dev`. Changes under `apps/web/src/` appear on save.
- **Before merging:** run `npm run build && npm start` to check the exact files that get deployed.

Checks, in either mode:

1. Click through every page in the nav.
2. Type a page URL directly, e.g. `localhost:3000/skills`, then refresh. Deep links are the part most often broken by hosting changes.
3. Open the résumé PDF link, and an unknown URL such as `localhost:3000/nope` (should show the 404 page).
4. In DevTools (F12):
   - **Console tab:** no red errors (including hydration errors).
   - **Network tab:** no failed requests.
   - Device toolbar (Ctrl+Shift+M): check the mobile layout.
5. Run `npm run lint`. It catches undefined variables and broken imports; there are no automated tests.

After a deploy, repeat steps 1–4 on the CloudFront URL.

## Infrastructure

Terraform in `infra/` (AWS provider, **us-east-1**). Install Terraform ≥ 1.10; the devcontainer includes it.

- `infra/bootstrap/`: one-time setup of the versioned, encrypted S3 bucket that stores the site's Terraform state. Its own small state file stays local and is gitignored.
- `infra/site/`: the site itself, with its state in that bucket (S3 lockfile locking):
  - a private S3 bucket, readable only by the distribution (Origin Access Control)
  - a CloudFront distribution for `jasonpelloni.com` and `www.jasonpelloni.com`, with an ACM certificate, HTTPS-only access, and security headers
  - a CloudFront Function (`infra/site/routing.js`) that 301-redirects `www` to the apex and maps extensionless paths to `<path>.html` (`/about` → `/about.html`)
  - custom error responses that serve `/404.html` with status 404 for missing objects
  - a GitHub Actions OIDC deploy role that only `main` of this repo can assume

Terraform creates the infrastructure only. The GitHub workflow builds and uploads the site (see [Deploys](#deploys)). Both S3 buckets have `prevent_destroy`, so `terraform destroy` stops before deleting them.

DNS stays at Hostinger, so the certificate's validation and the site's records are added there by hand.

### First-time setup / cutover

1. At Hostinger, lower the TTL on the existing `@` and `www` records (e.g. 300s) ahead of time.
2. With AWS credentials for the target account, create the state bucket:

   ```sh
   cd infra/bootstrap
   terraform init
   terraform apply
   ```

3. Initialize the site config against that bucket:

   ```sh
   cd ../site
   terraform init -backend-config="bucket=$(terraform -chdir=../bootstrap output -raw state_bucket)"
   ```

   If the account already has the GitHub OIDC provider (`token.actions.githubusercontent.com`), add `-var create_github_oidc_provider=false` to every `plan`/`apply` below so Terraform looks it up instead of creating it.
4. Create the certificate first, then add its validation records as CNAMEs in Hostinger DNS:

   ```sh
   terraform apply -target=aws_acm_certificate.site
   terraform output certificate_validation_records
   ```

   Hostinger appends the zone automatically, so enter the record name without the trailing `.jasonpelloni.com.`.
5. Create everything else. This waits (up to 2 hours) for the certificate to validate, then builds the distribution, which takes a few more minutes:

   ```sh
   terraform apply
   terraform output
   ```

   Then set these GitHub repo secrets from the outputs: `AWS_DEPLOY_ROLE_ARN` (`deploy_role_arn`), `S3_BUCKET_NAME` (`bucket_name`), `CLOUDFRONT_DISTRIBUTION_ID` (`distribution_id`).
6. Run the **Deploy to S3** workflow (Actions → Run workflow) and check the site on `distribution_domain_name` (`*.cloudfront.net`).
7. Repoint DNS at Hostinger:
   - `www` → CNAME to the CloudFront domain
   - `@` (apex) → ALIAS to the CloudFront domain. If Hostinger doesn't offer ALIAS for the apex, make `www` canonical instead: flip the redirect in `infra/site/routing.js` and use Hostinger's apex→www forwarding.
8. Once traffic is served by CloudFront, cancel the Hostinger hosting plan. Keep the domain and its DNS.

### Changing infrastructure

```sh
cd infra/site
terraform plan
terraform apply
```

## Deploys

Every push to `main` runs `.github/workflows/deploy.yml`:

1. Build the site.
2. Assume the deploy role via OIDC.
3. Upload hashed `_next/static/*` with a one-year immutable cache.
4. Upload everything else with `max-age=0`.
5. Invalidate CloudFront.

### Changing the CloudFront Function

The function and the build output must match: the function maps `/about` to `about.html`, which only the Next.js build produces. When changing either one, run `terraform apply` and the **Deploy to S3** workflow back to back. Page URLs may 404 for the minute or two between them.
