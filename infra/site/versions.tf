terraform {
  required_version = ">= 1.10"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  # The bucket comes from infra/bootstrap:
  #   terraform init -backend-config="bucket=<state_bucket output>"
  backend "s3" {
    key          = "site/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}

# us-east-1 only: CloudFront requires its ACM certificate there.
provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = { Project = "jasonpelloni.com" }
  }
}
