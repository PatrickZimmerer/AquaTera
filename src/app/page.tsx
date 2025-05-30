'use client'
import useAOS from './hooks/useAOS'
import { ParallaxProviders } from './providers/ParallaxProvider'
import HeroSection from './components/LandingPage/HeroSection/HeroSection'
import IntroductionSection from './components/LandingPage/IntroductionSection'

export default function Home() {
  useAOS()

  return (
    <ParallaxProviders>
      <main className='bg-primary flex flex-col justify-center overflow-x-hidden'>
        <HeroSection />
        <IntroductionSection />
      </main>
    </ParallaxProviders>
  )
}
