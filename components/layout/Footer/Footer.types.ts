export type SocialPlatform = 'twitter' | 'instagram' | 'linkedin' | 'youtube'

export type SocialLink = {
  platform: SocialPlatform
  label: string
  href: string
}

export type LegalLink = {
  label: string
  href: string
}
