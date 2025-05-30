import React from 'react'
import TheProblemAnimatedImage from './TheProblemAnimatedImage'

export default function TheProblemSection() {
  return (
    <div className='z-10 flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-8 lg:gap-x-16'>
      <TheProblemAnimatedImage />

      <div className='flex flex-col gap-y-3 overflow-x-hidden md:gap-y-3.5'>
        <h2
          data-aos='fade-left'
          className='text-4xl leading-[100%] font-medium tracking-[-0.09rem] uppercase lg:text-[3.375rem] lg:tracking-[-0.0675rem]'
        >
          THE <br /> PROBLEM
        </h2>

        <p
          data-aos='fade-left'
          className='font-dmSans max-w-80 leading-[130%] font-light tracking-[-0.02rem] md:max-w-96'
        >
          Blockchains reward activity. <br />
          Even when nothing gets done.
        </p>
      </div>
    </div>
  )
}
