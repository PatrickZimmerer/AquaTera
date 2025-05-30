import Image from 'next/image'
import React from 'react'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function BackedBySection() {
  const { isMobile } = useWindowWidthContext()

  return (
    <section className='bg-primary z-0 w-full'>
      <div className='side-padding relative flex flex-col items-center gap-y-6 py-12 lg:gap-y-12 lg:py-24'>
        <h4
          data-aos='fade-up'
          className='text-center text-4xl leading-[100%] tracking-[-0.09rem] uppercase lg:text-[2.375rem] lg:tracking-[-0.0475rem]'
        >
          Backed By
        </h4>

        <div className='flex flex-col items-center gap-y-8 md:flex-row md:gap-x-12'>
          <Image
            data-aos={isMobile ? 'fade-left' : 'fade-up'}
            src='/assets/logos/avalanche-logo.svg'
            alt='Avalanche'
            width={224}
            height={45}
          />

          <div
            data-aos-offset={isMobile ? 80 : 120}
            data-aos={isMobile ? 'fade-right' : 'fade-down'}
            className='h-px w-full bg-white md:h-28 md:w-px'
          />

          <Image
            data-aos={isMobile ? 'fade-left' : 'fade-up'}
            src='/assets/logos/helix-logo.svg'
            alt='Helix'
            width={101}
            height={35}
          />

          <div
            data-aos-offset={isMobile ? 80 : 120}
            data-aos={isMobile ? 'fade-right' : 'fade-down'}
            className='h-px w-full bg-white md:h-28 md:w-px'
          />

          <Image
            data-aos={isMobile ? 'fade-left' : 'fade-up'}
            src='/assets/logos/faculty-group-logo.svg'
            alt='Faculty Group'
            width={225}
            height={35}
          />
        </div>
      </div>
    </section>
  )
}
