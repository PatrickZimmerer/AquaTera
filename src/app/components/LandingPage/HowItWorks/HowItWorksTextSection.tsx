import React from 'react'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function HowItWorksTextSection() {
  const { isMobile } = useWindowWidthContext()

  return (
    <div className='z-10 flex flex-col gap-y-8 lg:gap-y-12'>
      <div className='flex flex-col gap-y-3'>
        <h3
          data-aos='fade-left'
          className='text-4xl leading-[100%] font-medium tracking-[-0.09rem] uppercase lg:text-[3.375rem] lg:tracking-[-0.0675rem]'
        >
          HOW {!isMobile ? <br /> : null} IT WORKS
        </h3>

        <p data-aos='fade-up' className='font-dmSans leading-[130%] font-light tracking-[-0.02rem]'>
          Think orchestras. Not silos.
        </p>
      </div>

      <div className='flex flex-col gap-y-1'>
        <h4 data-aos='fade-left' className='text-[1.375rem] leading-[90%] font-medium tracking-[-0.03rem] uppercase'>
          COMPOSERS
        </h4>

        <p data-aos='fade-up' className='font-dmSans max-w-72 leading-[130%] font-light tracking-[-0.02rem]'>
          Composers are purpose-built Layer 1s for specific industries.
        </p>
      </div>

      <div className='flex flex-col gap-y-1'>
        <h4 data-aos='fade-left' className='text-[1.375rem] leading-[90%] font-medium tracking-[-0.03rem] uppercase'>
          MODULES
        </h4>

        <p data-aos='fade-up' className='font-dmSans max-w-72 leading-[130%] font-light tracking-[-0.02rem]'>
          Modules are plug-in services: compute, storage, analytics, more.
        </p>

        <p data-aos='fade-up' className='font-dmSans max-w-96 pt-8 leading-[130%] font-light tracking-[-0.02rem]'>
          Together, they build coordinated ecosystems that deliver real value.{' '}
        </p>
      </div>
    </div>
  )
}
