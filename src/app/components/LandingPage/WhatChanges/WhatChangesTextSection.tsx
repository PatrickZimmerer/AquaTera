import React from 'react'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function WhatChangesTextSection() {
  const { isMobile } = useWindowWidthContext()

  return (
    <div className='z-10 flex flex-col gap-y-8'>
      <p
        data-aos='fade-left'
        className='text-center text-xl leading-[100%] font-medium tracking-[-0.025rem] uppercase lg:text-3xl lg:tracking-[-0.0375rem]'
      >
        Developers don’t deploy apps. <br />
        They compose economies.
      </p>

      <p
        data-aos='fade-right'
        className='text-center text-xl leading-[100%] font-medium tracking-[-0.025rem] uppercase lg:text-3xl lg:tracking-[-0.0375rem]'
      >
        Protocols don’t compete for users. <br />
        They collaborate for value.
      </p>

      <p
        data-aos='fade-left'
        className='text-center text-xl leading-[100%] font-medium tracking-[-0.025rem] uppercase lg:text-3xl lg:tracking-[-0.0375rem]'
      >
        Tokens don’t just move. {isMobile ? null : <br />}They mean something.
      </p>

      <p
        data-aos='fade-right'
        className='text-center text-xl leading-[100%] font-medium tracking-[-0.025rem] uppercase lg:text-3xl lg:tracking-[-0.0375rem]'
      >
        Impact becomes measurable. <br /> And measurable becomes monetizable.
      </p>
    </div>
  )
}
