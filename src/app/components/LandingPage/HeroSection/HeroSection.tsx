'use client'
import React from 'react'
import Image from 'next/image'
import LevitatingBackgroundCircle from './HeroBackgroundCircleBig'
import HeroBackgroundCircleSmallBottomRight from './HeroBackgroundCircleSmallBottomRight'
import HeroBackgroundStarWithCircleSmallTopRight from './HeroBackgroundStarWithCircleSmallTopRight'
import HeroBackgroundStarWithCircleCluster from './HeroBackgroundStarWithCircleCluster'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className='bg-primary h-dvh w-full'>
      <div className='side-padding relative flex h-full flex-col justify-between'>
        <LevitatingBackgroundCircle />

        <header className='flex items-center justify-between'>
          <Image
            className='z-[100]'
            src='/assets/logos/fusion-logo-with-text.svg'
            alt='Fusion logo'
            width={152}
            height={28}
          />

          <Link
            className='text-primary z-[100] hidden h-12 w-fit items-center justify-center rounded-full bg-white px-6 py-2 text-lg leading-[110%] tracking-[-0.03rem] uppercase transition-transform duration-200 hover:scale-[1.02] hover:shadow-md md:flex'
            href='/pdfs/fusion-litepaper.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read the Litepaper
          </Link>
        </header>

        <div className='relative my-auto flex flex-col items-center justify-center gap-y-4'>
          <HeroBackgroundStarWithCircleSmallTopRight />

          <HeroBackgroundCircleSmallBottomRight />

          <HeroBackgroundStarWithCircleCluster />
          {/* // Break each word in a seperate line on mobile */}
          <h1 className='z-20 text-center text-4xl leading-[100%] tracking-[-0.09rem] uppercase md:text-6xl xl:text-[5rem]'>
            <span className='flex flex-col items-center sm:hidden'>
              <span>Not</span>
              <span>another</span>
              <span>chain.</span>
              <span>A</span>
              <span>BLOCKCHAIN</span>
              <span>brain.</span>
            </span>

            <span className='hidden sm:inline'>
              Not another chain. <br /> A BLOCKCHAIN brain.
            </span>
          </h1>

          <Link
            className='text-primary z-30 flex h-8 w-fit items-center justify-center rounded-full bg-white px-6 py-2 text-xs leading-[110%] tracking-[-0.03rem] uppercase md:hidden'
            href='/pdfs/fusion-litepaper.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read the Litepaper
          </Link>
        </div>
      </div>
    </section>
  )
}
