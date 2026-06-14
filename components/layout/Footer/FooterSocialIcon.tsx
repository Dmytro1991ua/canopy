import type { SocialPlatform } from './Footer.types'

type Props = Readonly<{
  platform: SocialPlatform
}>

const icons: Record<SocialPlatform, React.ReactNode> = {
  twitter: (
    <svg viewBox="0 0 15 15" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M.97 1h3.35l3.1 4.4L11.27 1H14l-5.18 6.03L14.5 14h-3.35l-3.43-4.87L3.44 14H.73l5.46-6.35L.97 1z" />
    </svg>
  ),
  instagram: (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect x="1.5" y="1.5" width="12" height="12" rx="3.5" />
      <circle cx="7.5" cy="7.5" r="3" />
      <circle cx="11.2" cy="3.8" r=".5" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 15 15" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M2.5 5h2v7.5h-2zM3.5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 5h1.9v1.1h.03C8.27 5.42 9.2 5 10.3 5c2.14 0 2.7 1.41 2.7 3.24V12.5h-2v-3.8c0-.9-.02-2.06-1.25-2.06-1.26 0-1.45.98-1.45 2v3.86H6V5z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 15 15" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M13.7 4.4a1.64 1.64 0 0 0-1.16-1.16C11.44 3 7.5 3 7.5 3s-3.94 0-5.04.27A1.64 1.64 0 0 0 1.3 4.4 17.14 17.14 0 0 0 1 7.5c0 1.07.1 2.13.3 3.1a1.64 1.64 0 0 0 1.16 1.16C3.56 12 7.5 12 7.5 12s3.94 0 5.04-.27a1.64 1.64 0 0 0 1.16-1.15c.2-.97.3-2.03.3-3.08 0-1.07-.1-2.13-.3-3.1zM6.2 9.43V5.57l3.37 1.93-3.37 1.93z" />
    </svg>
  ),
}

export default function FooterSocialIcon({ platform }: Props) {
  return <>{icons[platform]}</>
}
