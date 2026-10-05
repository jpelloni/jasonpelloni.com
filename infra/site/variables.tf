variable "domain_name" {
  type        = string
  default     = "jasonpelloni.com"
  description = "Apex domain. www.<domain_name> is also served and redirected to the apex."
}

variable "github_oidc_sub_prefix" {
  type        = string
  default     = "repo:jpelloni@11633141/jasonpelloni.com@1402031689"
  description = "The repo's OIDC subject prefix (gh api repos/OWNER/REPO/actions/oidc/customization/sub -> sub_claim_prefix). This repo uses immutable subjects, which include owner and repo IDs. Only main of this repo may assume the deploy role."
}

variable "create_github_oidc_provider" {
  type        = bool
  default     = true
  description = "Set to false if this account already has the token.actions.githubusercontent.com OIDC provider; it is then looked up instead."
}
