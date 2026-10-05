variable "domain_name" {
  type        = string
  default     = "jasonpelloni.com"
  description = "Apex domain. www.<domain_name> is also served and redirected to the apex."
}

variable "github_repo" {
  type        = string
  default     = "jpelloni/jasonpelloni.com"
  description = "owner/repo allowed to assume the deploy role (main branch only)."
}

variable "create_github_oidc_provider" {
  type        = bool
  default     = true
  description = "Set to false if this account already has the token.actions.githubusercontent.com OIDC provider; it is then looked up instead."
}
