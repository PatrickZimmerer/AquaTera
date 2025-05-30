'use client'
import AlreadyComposingSection from './components/LandingPage/AlreadyComposing/AlreadyComposingSection'
import BackedBySection from './components/LandingPage/BackedBy/BackedBySection'
import FooterSection from './components/LandingPage/Footer/FooterSection'
import HeroSection from './components/LandingPage/HeroSection/HeroSection'
import HowItWorksSection from './components/LandingPage/HowItWorks/HowItWorksSection'
import NewKindOfStakeSection from './components/LandingPage/NewKindOfStake/NewKindOfStakeSection'
import ProblemShiftAnswerSection from './components/LandingPage/ProblemShiftAnswer/ProblemShiftAnswerSection'
import UnderTheHoodSection from './components/LandingPage/UnderTheHood/UnderTheHoodSection'
import WhatChangesSection from './components/LandingPage/WhatChanges/WhatChangesSection'
import useAOS from './hooks/useAOS'
import { ParallaxProviders } from './providers/ParallaxProvider'

export default function Home() {
  useAOS()

  return (
    <ParallaxProviders>
      <main className='bg-primary flex flex-col justify-center overflow-x-hidden pt-6'>
        <HeroSection />

        <ProblemShiftAnswerSection />

        <HowItWorksSection />

        <WhatChangesSection />

        <UnderTheHoodSection />

        <NewKindOfStakeSection />

        <AlreadyComposingSection />

        <BackedBySection />

        <FooterSection />
      </main>
    </ParallaxProviders>
  )
}
