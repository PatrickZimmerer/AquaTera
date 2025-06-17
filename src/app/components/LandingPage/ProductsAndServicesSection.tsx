import React from 'react'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function ProductsAndServicesSection() {
  return (
    <section id='products' className='relative w-full overflow-hidden max-md:min-h-dvh max-md:pb-[30rem] md:h-[65rem]'>
      <div className='side-padding mt-auto flex h-full flex-col'>
        <Parallax className='z-20' speed={20}>
          <div className='text-primary mt-16 flex h-full max-w-[33.5rem] flex-col gap-y-4 md:mt-40 md:ml-32'>
            <h3
              data-aos='fade-right'
              className='text-[1.625rem] leading-[100%] tracking-[-0.04875rem] md:text-[2.5rem] md:tracking-[-0.075rem] 2xl:text-[3.5rem]'
            >
              Products <br />
              and Services
            </h3>

            <p
              data-aos='fade-right'
              className='font-dmSans max-w-[19.5rem] text-[0.9375rem] leading-[140%] md:max-w-[34rem] md:text-lg'
            >
              At Aquatera, we develop a diverse range of high-integrity medical cannabis products designed to support
              wellbeing. Each formulation is the result of rigorous research, organic cultivation, and precision
              extraction—anchored in our partnerships with leading Australian universities and biotechnology partners.
            </p>

            <p
              data-aos='fade-right'
              className='font-dmSans max-w-[19.5rem] text-[0.9375rem] leading-[140%] md:max-w-[34rem] md:text-lg'
            >
              Our product pipeline includes evidence-led medicinal cannabis formulations and novel delivery systems.
              Every product reflects our commitment to therapeutic efficacy, natural integrity, and sustainable
              innovation.
            </p>
          </div>
        </Parallax>

        <Image
          className='block h-full w-full object-cover object-bottom md:hidden'
          src={'/assets/images/background/products-background-mobile.png'}
          alt='Products and Services Background'
          loading='lazy'
          fill
        />

        <Image
          className='hidden w-full max-w-none object-cover md:block'
          src={'/assets/images/background/products-background-desktop.png'}
          alt='Products and Services Background'
          loading='lazy'
          fill
        />
      </div>
    </section>
  )
}
