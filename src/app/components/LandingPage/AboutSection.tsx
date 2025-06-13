import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id='about' className='text-primary relative h-dvh max-h-[80rem] w-full overflow-hidden'>
      <div className='side-padding mt-auto flex h-full flex-col'>
        <div
          data-aos={'fade-left'}
          data-aos-offset='200'
          className='z-20 flex h-full max-w-[33.3125rem] flex-col justify-end gap-y-4 pb-16 md:mr-44 md:ml-auto md:justify-start md:gap-y-6 md:pt-36'
        >
          <h3 className='text-[1.625rem] leading-[100%] tracking-[-0.04875rem] md:text-[2.5rem] md:tracking-[-0.075rem] 2xl:text-[3.5rem]'>
            About <br /> AquaTera
          </h3>

          <div className='flex flex-col gap-y-4'>
            <p className='font-dmSans text-[0.9375rem] leading-[140%] md:text-lg'>
              Aquatera is more than a cannabis company—we are stewards of an ancient landscape, cultivating harmony
              between nature, science, and self.
            </p>
            <p className='font-dmSans text-[0.9375rem] leading-[140%] md:text-lg'>
              We produce premium, small-batch medical cannabis through organic cultivation, AI-assisted environmental
              control, and data-led agronomy. Our regenerative infrastructure is engineered to minimise ecological
              impact while maximising plant integrity, therapeutic efficacy, and long-term sustainability.
            </p>
            <p className='font-dmSans text-[0.9375rem] leading-[140%] md:text-lg'>
              At Aquatera, we believe the path to wellness lies in the fusion of holistic connection and modern
              precision—where nature guides, science advances, and meaningful innovation grows from the ground up.
            </p>
          </div>
        </div>
      </div>
      {/* Mobile Background Image */}
      <Image
        className='absolute inset-0 z-0 block h-full w-full object-cover md:hidden md:object-center'
        src={'/assets/images/background/purple-plant-mobile.png'}
        alt='Purple Plant Background'
        loading='lazy'
        fill
      />

      {/* Desktop Background Image */}
      <Image
        className='absolute inset-0 z-0 hidden h-full w-full object-cover md:block md:object-center'
        src={'/assets/images/background/purple-plant-desktop.png'}
        alt='Purple Plant Background'
        loading='lazy'
        fill
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-[rgba(61,26,10,0.40)]' />
    </section>
  )
}
