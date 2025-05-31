import React from 'react'
import Image from 'next/image'

export default function ResearchAndDevelopmentSection() {
  return (
    <section id='research' className='text-primary relative h-dvh max-h-[80rem] w-full overflow-hidden'>
      <div className='side-padding flex h-full md:items-end'>
        <div
          data-aos={'fade-up'}
          data-aos-offset='200'
          className='relative z-20 flex max-w-[33.3125rem] flex-col gap-y-4 pt-16 md:mt-auto md:mr-auto md:mb-36 md:ml-44 md:justify-start md:gap-y-6'
        >
          <h3 className='text-[1.625rem] leading-[100%] tracking-[-0.04875rem] md:text-[2.5rem] md:tracking-[-0.075rem] 2xl:text-[3.5rem]'>
            Research
            <br className='md:hidden' /> and
            <br className='hidden md:block' /> Development
          </h3>

          <p className='font-dmSans text-[0.9375rem] leading-[140%] md:text-lg'>
            At AquaTera, progress is grounded in balance. Our commitment to excellence is reflected in our rigorous
            approach to clinical trials, genetic development, and innovative cannabis strain research. We actively
            partner with renowned Australian academic institutions, bringing together ancient wisdom and modern science
            to ensure that every AquaTera product remains at the forefront of medicinal innovation and therapeutic
            efficacy.
          </p>
        </div>
      </div>

      {/* Mobile Background Image */}
      <div className='absolute inset-0 z-0 h-full w-full overflow-hidden'>
        <Image
          className='block h-full w-full object-cover md:hidden'
          src={'/assets/images/background/cutting-plants-mobile.png'}
          alt='Cutting Plants Background'
          loading='lazy'
          fill
        />

        <Image
          className='hidden w-full max-w-none object-cover md:block'
          src={'/assets/images/background/cutting-plants-desktop.png'}
          alt='Cutting Plants Background'
          loading='lazy'
          fill
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-[rgba(61,26,10,0.40)]' />
      </div>
    </section>
  )
}
