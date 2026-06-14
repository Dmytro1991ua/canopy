import FooterBottom from './FooterBottom'
import FooterBrand from './FooterBrand'
import FooterNavColumns from './FooterNavColumns'

export default function Footer() {
  return (
    <footer className="bg-green-deep pt-16 pb-8" role="contentinfo">
      <div className="section-container">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <FooterBrand />
          <FooterNavColumns />
        </div>

        <FooterBottom />
      </div>
    </footer>
  )
}
