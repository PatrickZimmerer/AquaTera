'use client'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='bg-primary h-dvh w-full'>
      <div className='side-padding relative flex h-full flex-col justify-between'>
        <Navbar />

        <Image
          className='absolute inset-0 z-0 h-dvh w-full object-cover object-[75%_center] md:object-center'
          src='/assets/images/background/big-island.png'
          alt='Big Island Background'
          priority
          fill
        />
      </div>
    </section>
  )
}
