'use client'
import useAOS from './hooks/useAOS'
import { ParallaxProviders } from './providers/ParallaxProvider'
import HeroSection from './components/LandingPage/HeroSection'
import IntroductionSection from './components/LandingPage/IntroductionSection'
import AboutSection from './components/LandingPage/AboutSection'
import ProductsAndServicesSection from './components/LandingPage/ProductsAndServicesSection'
import ResearchAndDevelopmentSection from './components/LandingPage/ResearchAndDevelopmentSection'
import SustainabilitySection from './components/LandingPage/SustainabilitySection'
import WellnessSection from './components/LandingPage/WellnessSection'

export default function Home() {
  useAOS()

  return (
    <ParallaxProviders>
      <main className='bg-primary flex flex-col justify-center overflow-x-hidden'>
        <HeroSection />

        <IntroductionSection />

        <AboutSection />

        <ProductsAndServicesSection />

        <ResearchAndDevelopmentSection />

        <SustainabilitySection />

        <WellnessSection />
      </main>
    </ParallaxProviders>
  )
}
