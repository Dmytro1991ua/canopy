import FooterBottom from './FooterBottom'
import FooterBrand from './FooterBrand'
import FooterNavColumns from './FooterNavColumns'

export default function Footer() {
  return (
    <footer className="bg-green-deep pt-16 pb-8" role="contentinfo">
      <div className="section-container">
        <div className="mb-12 flex flex-col gap-10 md:grid md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-10">
          <FooterBrand />
          {/* On mobile/tablet: 2-col sub-grid; on md+: contents flows into parent 4-col grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:contents">
            <FooterNavColumns />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  )
}
