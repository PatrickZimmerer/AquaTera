'use client'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { useWindowWidthContext } from '../../../providers/WindowWidthProvider'

export default function HeroSection() {
  const { isMobile } = useWindowWidthContext()

  return (
    <section className='relative h-dvh w-full overflow-hidden'>
      <div className='side-padding relative z-10 flex h-full w-full flex-col'>
        <Navbar />

        <div className='flex flex-1 flex-col items-center justify-center gap-y-8 md:gap-y-12'>
          <Image src='/assets/logos/aqua-tera-brand-logo.svg' alt='Aqua Tera Logo' width={77} height={59} />
          <h1 className='text-primary max-w-3xl text-center text-[2.5rem] leading-[100%] tracking-[-0.075rem] md:text-[4.375rem]'>
            Where {isMobile ? <br /> : null}
            earth {isMobile ? null : <br />}
            and water meet <br />
            and wellness <br />
            grows.
          </h1>
        </div>
      </div>

      <Image
        className='animate-breathe absolute inset-0 z-0 h-dvh w-full object-cover object-[75%_center] md:object-center'
        src='/assets/images/background/big-island.png'
        alt='Big Island Background'
        priority
        fill
        style={{
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      />
    </section>
  )
}
