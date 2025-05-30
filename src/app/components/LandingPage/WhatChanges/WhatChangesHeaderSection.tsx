import React from 'react'

export default function WhatChangesHeaderSection() {
  return (
    <div className='z-10 flex flex-col gap-y-3'>
      <h3
        data-aos='fade-left'
        className='text-4xl leading-[100%] font-medium tracking-[-0.09rem] uppercase lg:text-[3.375rem] lg:tracking-[-0.0675rem]'
      >
        WHAT CHANGES
      </h3>
      <p
        data-aos='fade-up'
        className='font-dmSans max-w-80 leading-[130%] font-light tracking-[-0.02rem] md:max-w-lg lg:text-center'
      >
        The AVAX token plays a critical role in Composers’ token economies in significant ways.
      </p>
    </div>
  )
}
