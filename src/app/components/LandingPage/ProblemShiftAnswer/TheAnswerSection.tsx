import React from 'react'
import TheAnswerAnimatedImage from './TheAnswerAnimatedImage'

export default function TheAnswerSection() {
  return (
    <div className='z-10 flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-8 lg:gap-x-16'>
      <TheAnswerAnimatedImage />

      <div className='flex flex-col gap-y-3 overflow-x-hidden md:gap-y-3.5'>
        <h2
          data-aos='fade-left'
          className='text-4xl leading-[100%] font-medium tracking-[-0.09rem] uppercase lg:text-[3.375rem] lg:tracking-[-0.0675rem]'
        >
          THE <br /> ANSWER
        </h2>
        <p
          data-aos='fade-left'
          className='font-dmSans max-w-80 leading-[130%] font-light tracking-[-0.02rem] md:max-w-96'
        >
          Fusion is a new operating layer for blockchain economies. It doesn&apos;t just settle transactions. It settles
          business.
        </p>
      </div>
    </div>
  )
}
