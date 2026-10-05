output "certificate_validation_records" {
  description = "Add these as CNAMEs in Hostinger DNS so the certificate can validate."
  value = [
    for o in aws_acm_certificate.site.domain_validation_options : {
      name  = o.resource_record_name
      type  = o.resource_record_type
      value = o.resource_record_value
    }
  ]
}

output "bucket_name" {
  description = "GitHub secret S3_BUCKET_NAME"
  value       = aws_s3_bucket.site.id
}

output "distribution_id" {
  description = "GitHub secret CLOUDFRONT_DISTRIBUTION_ID"
  value       = aws_cloudfront_distribution.site.id
}

output "distribution_domain_name" {
  description = "Point www (CNAME) and the apex (ALIAS) at this name"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "deploy_role_arn" {
  description = "GitHub secret AWS_DEPLOY_ROLE_ARN"
  value       = aws_iam_role.deploy.arn
}

output "certificate_arn" {
  value = aws_acm_certificate.site.arn
}
