'use client'
import useAOS from './hooks/useAOS'
import { ParallaxProviders } from './providers/ParallaxProvider'
import HeroSection from './components/LandingPage/HeroSection'
import IntroductionSection from './components/LandingPage/IntroductionSection'
import AboutSection from './components/LandingPage/AboutSection'

export default function Home() {
  useAOS()

  return (
    <ParallaxProviders>
      <main className='bg-primary flex flex-col justify-center overflow-x-hidden'>
        <HeroSection />

        <IntroductionSection />

        <AboutSection />
      </main>
    </ParallaxProviders>
  )
}
