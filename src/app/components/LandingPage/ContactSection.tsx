import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { handleSmoothScroll } from '../../utility/utils'

export default function ContactSection() {
  return (
    <section id='contact' className='relative h-fit w-full overflow-hidden'>
      <div className='side-padding flex h-full flex-col items-center justify-center gap-y-8'>
        <div
          data-aos='fade-up'
          data-aos-offset={'200'}
          className='text-secondary z-20 mx-auto flex max-w-[40rem] flex-col gap-y-2 py-40 text-center'
        >
          <h3 className='text-[1.625rem] leading-[100%] tracking-[-0.04875rem] md:text-[2.5rem] md:tracking-[-0.075rem] 2xl:text-[3.5rem]'>
            Contact
          </h3>

          <p className='font-dmSans text-[0.9375rem] leading-[140%] md:text-lg'>
            We welcome conversations, inquiries, and collaboration opportunities. Contact AquaTera through our online
            enquiry form, phone, or email. Or visit us in beautiful Barmera, South Australia, and experience firsthand
            our commitment to cultivating wellness that respects nature, embraces innovation, and enriches lives.{' '}
          </p>

          <Button className='z-20 mt-4 w-fit self-center px-12 py-3' data-aos='fade-down'>
            Contact
          </Button>
        </div>

        <a className='z-20 mx-auto mb-8' href={'/#'} onClick={(e) => handleSmoothScroll(e)}>
          <Image src='/assets/logos/aqua-tera-dark-logo.svg' alt='Aqua Tera Logo' width={44} height={34} />
        </a>
      </div>

      {/* Mobile Background Image */}
      <div
        className='bg-lightgray absolute inset-0 z-0 h-dvh w-full bg-cover bg-center bg-no-repeat mix-blend-overlay md:hidden'
        style={{
          backgroundImage: "url('/assets/images/background/river-map-mobile.png')",
        }}
      />

      {/* Desktop Background Image */}
      <div
        className='bg-lightgray 2xl:bg-fill absolute inset-0 z-0 hidden h-dvh w-full bg-cover bg-center bg-no-repeat mix-blend-overlay md:block'
        style={{
          backgroundImage: "url('/assets/images/background/river-map-desktop.png')",
        }}
      />
    </section>
  )
}
