import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import FocusAreas from '@/components/sections/FocusAreas'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import ImpactNumbers from '@/components/sections/ImpactNumbers'
import MarqueeBar from '@/components/sections/MarqueeBar'
import Pledge from '@/components/sections/Pledge'
import Testimonial from '@/components/sections/Testimonial'
import WhyItMatters from '@/components/sections/WhyItMatters'
import BackToTop from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeBar />
        <WhyItMatters />
        <FocusAreas />
        <HowItWorks />
        <ImpactNumbers />
        <Testimonial />
        <Pledge />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
