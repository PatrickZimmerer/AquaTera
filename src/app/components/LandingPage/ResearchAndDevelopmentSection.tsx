import React from 'react'
import Image from 'next/image'
import { useWindowWidthContext } from '../../providers/WindowWidthProvider'

export default function ResearchAndDevelopmentSection() {
  const { isMobile } = useWindowWidthContext()

  return (
    <section id='research' className='text-primary relative max-h-[80rem] w-full overflow-hidden max-md:min-h-dvh'>
      <div className='side-padding flex h-full min-h-full flex-col justify-between gap-y-24'>
        <div
          data-aos={'fade-up'}
          data-aos-offset='200'
          className='relative z-20 flex max-w-[33.3125rem] flex-col gap-y-4 pt-16 md:mr-auto md:mb-36 md:ml-44 md:justify-start md:gap-y-6 md:pt-24 lg:pt-40'
        >
          <h3 className='text-[1.625rem] leading-[100%] tracking-[-0.04875rem] md:text-[2.5rem] md:tracking-[-0.075rem] 2xl:text-[3.5rem]'>
            Research
            <br className='md:hidden' /> and
            <br className='hidden md:block' /> Development
          </h3>

          <p className='font-dmSans text-[0.9375rem] leading-[140%] md:text-lg'>
            Aquatera&apos;s R&D program is structured, data-driven, and built for scalability—spanning cannabinoid
            research, strain optimization, and delivery system innovation across a phased rollout.
          </p>
        </div>

        <ul className='max-lg: z-20 flex flex-col gap-y-6 pb-12 max-lg:max-w-[33.3125rem] md:ml-44 md:pb-20 lg:mx-32 lg:flex-row lg:justify-between lg:gap-x-8 lg:pb-32'>
          <li data-aos='fade-up' className='flex flex-col gap-y-4'>
            <h4 className='text-2xl leading-[100%] tracking-[-3%]'>Phase 1</h4>

            <p className='font-dmSans text-[0.9375rem] leading-[140%]'>
              establishes core infrastructure and pilot cultivation using high-stability genetics under controlled
              conditions to validate our model and systems.
            </p>
          </li>

          <li data-aos='fade-up' data-aos-delay={isMobile ? 0 : 200} className='flex flex-col gap-y-4'>
            <h4 className='text-2xl leading-[100%] tracking-[-3%]'>Phase 2</h4>

            <p className='font-dmSans text-[0.9375rem] leading-[140%]'>
              introduces a dedicated genetics and formulation lab for in-house breeding, compound isolation, and testing
              of novel delivery formats.
            </p>
          </li>

          <li data-aos='fade-up' data-aos-delay={isMobile ? 0 : 400} className='flex flex-col gap-y-4'>
            <h4 className='text-2xl leading-[100%] tracking-[-3%]'>Phase 3</h4>

            <p className='font-dmSans text-[0.9375rem] leading-[140%]'>
              focuses on clinical trial readiness, integrating GMP-aligned processes, advanced extraction, and research
              partnerships to support regulatory pathways.
            </p>
          </li>

          <li data-aos='fade-up' data-aos-delay={isMobile ? 0 : 600} className='flex flex-col gap-y-4'>
            <h4 className='text-2xl leading-[100%] tracking-[-3%]'>All phases</h4>

            <p className='font-dmSans text-[0.9375rem] leading-[140%]'>
              are underpinned by modular infrastructure and integrated analytics, ensuring traceability, compliance, and
              commercial readiness at every stage.
            </p>
          </li>
        </ul>
      </div>

      {/* Mobile Background Image */}
      <div className='absolute inset-0 z-0 h-full w-full overflow-hidden'>
        <Image
          className='block h-full w-full object-cover md:hidden'
          src={'/assets/images/background/research-background-mobile.png'}
          alt='Research Background'
          loading='lazy'
          fill
        />

        <Image
          className='hidden w-full max-w-none object-cover md:block'
          src={'/assets/images/background/research-background-desktop.png'}
          alt='Research Background'
          loading='lazy'
          fill
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-[rgba(61,26,10,0.40)]' />
      </div>
    </section>
  )
}
