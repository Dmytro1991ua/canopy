import { ImageResponse } from 'next/og'

export const alt = 'Canopy — Green Energy for a Living Planet'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#1b3a0f',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Warm glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-8%',
          width: '65%',
          height: '90%',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(242,176,56,0.18) 0%, rgba(232,148,26,0.07) 45%, transparent 70%)',
        }}
      />

      {/* Big leaf silhouette */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '-3%',
          width: '340px',
          height: '440px',
          opacity: 0.1,
          background: '#9ec26a',
          borderRadius: '50% 50% 46% 54% / 60% 56% 44% 40%',
        }}
      />

      {/* Wordmark */}
      <div
        style={{
          position: 'absolute',
          top: '72px',
          left: '80px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            background: '#9ec26a',
            borderRadius: '50% 50% 46% 54% / 60% 56% 44% 40%',
          }}
        />
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: '#faf6ec',
            letterSpacing: '0.05em',
          }}
        >
          CANOPY
        </span>
      </div>

      {/* Main copy */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '720px' }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#f2b038',
            textTransform: 'uppercase',
          }}
        >
          Green Energy for a Living Planet
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: '#faf6ec',
            lineHeight: 1.08,
          }}
        >
          The Earth Can&apos;t Wait.
        </div>
        <div
          style={{
            fontSize: 22,
            color: 'rgba(232,244,218,0.65)',
            lineHeight: 1.5,
          }}
        >
          Join 18M+ pledge signers choosing a sustainable future — together.
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
