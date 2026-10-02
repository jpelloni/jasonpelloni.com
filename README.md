# jasonpelloni.com

Personal site: a Vite + React SPA (`apps/web`) hosted on a private S3 bucket behind CloudFront.

## Local development

```sh
npm ci
npm run dev      # http://localhost:3000
npm run build    # outputs dist/apps/web
npm start        # preview the production build
npm run lint
```

`npm start` serves the last `npm run build` output at http://localhost:3000.
Stop either server with Ctrl+C.

### Testing locally

The site is a single-page app: every page URL returns the same `index.html`, and React Router (`apps/web/src/App.jsx`) renders the page from the URL. In production, the CloudFront Function in `infra/site.yaml` does the "return `index.html`" part.

- **While editing:** use `npm run dev`. Changes under `apps/web/src/` appear on save.
- **Before merging:** run `npm run build && npm start` to check the exact files that get deployed.

Checks, in either mode:

1. Click through every page in the nav.
2. Type a page URL directly, e.g. `localhost:3000/skills`, then refresh. Deep links are the part SPAs most often get wrong on new hosting.
3. Open the résumé PDF link.
4. In DevTools (F12):
   - **Console tab:** no red errors.
   - **Network tab:** no failed requests.
   - Device toolbar (Ctrl+Shift+M): check the mobile layout.
5. Run `npm run lint`. It catches undefined variables and broken imports; there are no automated tests.

After a deploy, repeat steps 1–4 on the CloudFront URL.

## Infrastructure

`infra/site.yaml` (CloudFormation, **us-east-1**) creates:

- a private S3 bucket, readable only by the distribution (Origin Access Control)
- a CloudFront distribution for `jasonpelloni.com` and `www.jasonpelloni.com`, with an ACM certificate, HTTPS-only access, and security headers
- a CloudFront Function that 301-redirects `www` to the apex and serves `index.html` for extensionless paths (SPA deep links)
- a GitHub Actions OIDC deploy role that only `main` of this repo can assume

DNS stays at Hostinger, so the certificate's validation and the site's records are added there by hand.

### First-time setup / cutover

1. At Hostinger, lower the TTL on the existing `@` and `www` records (e.g. 300s) ahead of time.
2. Deploy the stack. If the account already has the GitHub OIDC provider, pass
   `CreateGitHubOidcProvider=false ExistingOidcProviderArn=<arn>` instead:

   ```sh
   aws cloudformation deploy --region us-east-1 \
     --stack-name jasonpelloni-site \
     --template-file infra/site.yaml \
     --capabilities CAPABILITY_IAM \
     --parameter-overrides CreateGitHubOidcProvider=true
   ```

3. While the stack waits on the certificate, get the validation records and add them as CNAMEs in Hostinger DNS:

   ```sh
   aws acm list-certificates --region us-east-1 \
     --query "CertificateSummaryList[?DomainName=='jasonpelloni.com'].CertificateArn" --output text
   aws acm describe-certificate --region us-east-1 --certificate-arn <arn> \
     --query "Certificate.DomainValidationOptions[].ResourceRecord"
   ```

   Hostinger appends the zone automatically, so enter the record name without the trailing `.jasonpelloni.com.`.
4. When the stack completes, read its outputs:

   ```sh
   aws cloudformation describe-stacks --region us-east-1 --stack-name jasonpelloni-site \
     --query "Stacks[0].Outputs" --output table
   ```

   Then set these GitHub repo secrets: `AWS_DEPLOY_ROLE_ARN`, `S3_BUCKET_NAME`, `CLOUDFRONT_DISTRIBUTION_ID`.
5. Run the **Deploy to S3** workflow (Actions → Run workflow) and check the site on the `DistributionDomainName` (`*.cloudfront.net`).
6. Repoint DNS at Hostinger:
   - `www` → CNAME to the CloudFront domain
   - `@` (apex) → ALIAS to the CloudFront domain. If Hostinger doesn't offer ALIAS for the apex, make `www` canonical instead: flip the redirect in the stack's CloudFront Function and use Hostinger's apex→www forwarding.
7. Once traffic is served by CloudFront, cancel the Hostinger hosting plan. Keep the domain and its DNS.

## Deploys

Every push to `main` runs `.github/workflows/deploy.yml`:

1. Build the site.
2. Assume the deploy role via OIDC.
3. Upload hashed `assets/*` with a one-year immutable cache.
4. Upload everything else with `max-age=0`.
5. Invalidate CloudFront.
