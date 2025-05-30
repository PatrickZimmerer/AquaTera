'use client'
import React from 'react'
import Navbar from './Navbar'

export default function HeroSection() {
  return (
    <section className='bg-primary h-dvh w-full'>
      <div className='side-padding relative flex h-full flex-col justify-between'>
        <Navbar />
      </div>
    </section>
  )
}
