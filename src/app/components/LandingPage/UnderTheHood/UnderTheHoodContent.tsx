import React from 'react'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function UnderTheHoodContent() {
  const { isMobile } = useWindowWidthContext()

  return (
    <div className='z-10 flex flex-col gap-y-12 text-center'>
      <h3
        data-aos='fade-up'
        className='text-4xl leading-[100%] font-medium tracking-[-0.09rem] uppercase lg:text-[5rem] lg:tracking-[-0.2rem]'
      >
        UNDER <br /> THE HOOD
      </h3>
      <div className='flex flex-col items-center gap-y-8 lg:flex-row lg:items-start lg:gap-x-8'>
        <div className='flex flex-col gap-y-2'>
          <h4
            data-aos-delay={isMobile ? 0 : 100}
            data-aos={isMobile ? 'fade-left' : 'fade-in'}
            data-aos-offset={100}
            className='text-[1.375rem] leading-[90%] font-medium tracking-[-0.03rem] uppercase'
          >
            AVALANCHE
          </h4>

          <p
            data-aos-delay={isMobile ? 0 : 100}
            data-aos={isMobile ? 'fade-right' : 'fade-in'}
            className='font-dmSans max-w-48 leading-[130%] font-light tracking-[-0.02rem]'
          >
            Built on Avalanche. Only possible through Avalanche.
          </p>
        </div>

        <div className='flex flex-col gap-y-2'>
          <h4
            data-aos-delay={isMobile ? 0 : 300}
            data-aos={isMobile ? 'fade-left' : 'fade-in'}
            data-aos-offset={100}
            className='text-[1.375rem] leading-[90%] font-medium tracking-[-0.03rem] uppercase'
          >
            C-CHAIN
          </h4>

          <p
            data-aos-delay={isMobile ? 0 : 300}
            data-aos={isMobile ? 'fade-right' : 'fade-in'}
            className='font-dmSans max-w-48 leading-[130%] font-light tracking-[-0.02rem]'
          >
            C-Chain executes logic with familiar Solidity tooling.
          </p>
        </div>

        <div className='flex flex-col gap-y-2'>
          <h4
            data-aos-delay={isMobile ? 0 : 600}
            data-aos={isMobile ? 'fade-left' : 'fade-in'}
            data-aos-offset={100}
            className='text-[1.375rem] leading-[90%] font-medium tracking-[-0.03rem] uppercase'
          >
            WARP
          </h4>

          <p
            data-aos-delay={isMobile ? 0 : 600}
            data-aos={isMobile ? 'fade-right' : 'fade-in'}
            className='font-dmSans max-w-48 leading-[130%] font-light tracking-[-0.02rem]'
          >
            Warp Messaging keeps Composers in sync and Modules interoperable.
          </p>
        </div>
      </div>
    </div>
  )
}
