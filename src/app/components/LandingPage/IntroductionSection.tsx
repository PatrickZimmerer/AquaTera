import React from 'react'
import { useScrollControlledAnimation } from '../../hooks/useScrollControlledAnimation'

export default function IntroductionSection() {
  // Split the text into sentences
  const sentences = [
    "Nestled in Barmera, along the banks of South Australia's majestic River Murray,",
    'AquaTera is dedicated to cultivating harmony between land, science, and self.',
    'We proudly offer sustainable, organic medical cannabis products, supported by',
    'innovative wellness solutions, cutting-edge research, and holistic experiences.',
    'At AquaTera, nature guides, science refines, and healing happens.',
  ]

  const { sectionRef, visibleSentences } = useScrollControlledAnimation({
    sentences,
    animationDelay: 250,
  })

  return (
    <section ref={sectionRef} className='relative h-dvh max-h-[60rem] w-full overflow-hidden'>
      <div className='side-padding flex h-full flex-col justify-center'>
        <div className='z-20 mx-auto max-w-[68.5rem] text-center text-xl leading-[120%] tracking-[-0.0375rem] md:text-[2.5rem]'>
          {sentences.map((sentence, index) => (
            <span
              key={index}
              className={`inline transition-opacity duration-[800ms] ${
                index < visibleSentences ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {sentence}
              {index < sentences.length - 1 && ' '}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Background Image */}
      <div
        className='bg-lightgray absolute inset-0 z-0 h-dvh w-full bg-cover bg-center bg-no-repeat mix-blend-overlay md:hidden'
        style={{
          backgroundImage: "url('/assets/images/background/river-map-mobile.png')",
        }}
      />

      {/* Desktop Background Image */}
      <div
        className='bg-lightgray 2xl:bg-fill absolute inset-0 z-0 hidden h-dvh w-full bg-cover bg-center bg-no-repeat mix-blend-overlay md:block'
        style={{
          backgroundImage: "url('/assets/images/background/river-map-desktop.png')",
        }}
      />
    </section>
  )
}
