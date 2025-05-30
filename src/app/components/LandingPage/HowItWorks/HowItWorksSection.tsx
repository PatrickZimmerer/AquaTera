import React from 'react'
import BigRedBackgroundCircle from './BigRedBackgroundCircle'
import HowItWorksTextSection from './HowItWorksTextSection'
import HowItWorksImageSection from './HowItWorksImageSection'

export default function HowItWorksSection() {
  return (
    <section className='bg-primary z-20 w-full'>
      <div className='side-padding relative flex flex-col gap-y-12 py-16 md:items-center lg:flex-row-reverse lg:justify-center lg:gap-x-24 lg:gap-y-0 lg:py-24 xl:gap-x-32 xl:py-40'>
        <HowItWorksTextSection />

        <HowItWorksImageSection />

        <BigRedBackgroundCircle />
      </div>
    </section>
  )
}
