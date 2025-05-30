import Image from 'next/image'
import React from 'react'

export default function AlreadyComposingSection() {
  return (
    <section className='bg-primary z-0 w-full'>
      <div className='side-padding relative flex flex-col items-center gap-y-6 py-12 lg:gap-y-12 lg:py-24'>
        <h4
          data-aos='fade-up'
          className='text-center text-4xl leading-[100%] tracking-[-0.09rem] uppercase lg:text-[2.375rem] lg:tracking-[-0.0475rem]'
        >
          ALREADY COMPOSING
        </h4>

        <div className='grid w-full grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-8'>
          {/* First column */}
          <div className='flex flex-col items-center'>
            <div className='flex h-[8.75rem] items-center justify-center' data-aos-offset={260} data-aos='fade-down'>
              <Image src='/assets/images/abstract/four-dots.svg' alt='Four Circles' width={139} height={139} />
            </div>

            <div data-aos='fade-in' className='mt-4 flex flex-col gap-y-4 text-center'>
              <h5 className='text-[1.75rem] leading-[90%] tracking-[-0.035rem] uppercase'>Kite AI</h5>
              <p className='font-dmSans max-w-xs leading-[130%] font-light tracking-[-0.02rem]'>
                Marketplace for integrated decentralized AI services.
              </p>
            </div>
          </div>

          {/* Second column */}
          <div className='flex flex-col items-center'>
            <div className='flex h-[8.75rem] items-center justify-center' data-aos-offset={260} data-aos='fade-down'>
              <Image src='/assets/images/abstract/abstract-s.svg' alt='Abstract S' width={152} height={132} />
            </div>

            <div data-aos='fade-in' className='mt-4 flex flex-col gap-y-4 text-center'>
              <h5 className='text-[1.75rem] leading-[90%] tracking-[-0.035rem] uppercase'>Tayga</h5>
              <p className='font-dmSans max-w-xs leading-[130%] font-light tracking-[-0.02rem]'>
                Physical infrastructure delivered at 90% less cost.
              </p>
            </div>
          </div>

          {/* Third column */}
          <div className='flex flex-col items-center'>
            <div className='flex h-[8.75rem] items-center justify-center' data-aos-offset={260} data-aos='fade-down'>
              <Image src='/assets/images/abstract/dot-in-circle.svg' alt='Dot in Circle' width={131} height={131} />
            </div>

            <div data-aos='fade-in' className='mt-4 flex flex-col gap-y-4 text-center'>
              <h5 className='text-[1.75rem] leading-[90%] tracking-[-0.035rem] uppercase'>Life AI</h5>
              <p className='font-dmSans max-w-xs leading-[130%] font-light tracking-[-0.02rem]'>
                Self-sovereign health information with fair compensation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
