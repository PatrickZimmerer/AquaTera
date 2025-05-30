'use client'
import HeroSection from './components/LandingPage/HeroSection/HeroSection'
import useAOS from './hooks/useAOS'
import { ParallaxProviders } from './providers/ParallaxProvider'

export default function Home() {
  useAOS()

  return (
    <ParallaxProviders>
      <main className='bg-primary flex flex-col justify-center overflow-x-hidden'>
        <HeroSection />
      </main>
    </ParallaxProviders>
  )
}
