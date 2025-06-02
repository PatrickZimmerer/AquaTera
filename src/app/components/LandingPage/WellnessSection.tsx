import React from 'react'
import Image from 'next/image'

export default function WellnessSection() {
  return (
    <section id='wellness' className='text-primary relative h-dvh max-h-[80rem] w-full overflow-hidden'>
      <div className='side-padding mt-auto flex h-full flex-col'>
        <div
          data-aos={'fade-left'}
          data-aos-offset='200'
          className='z-20 flex h-full max-w-[33.3125rem] flex-col justify-end gap-y-4 pb-16 md:mr-44 md:ml-auto md:justify-start md:gap-y-6 md:pt-36'
        >
          <h3 className='text-[1.625rem] leading-[100%] tracking-[-0.04875rem] md:text-[2.5rem] md:tracking-[-0.075rem] 2xl:text-[3.5rem]'>
            Wellness Retreat
          </h3>

          <p className='font-dmSans text-[0.9375rem] leading-[140%] md:text-lg'>
            Our AquaTera wellness retreat is more than just a destination, it’s a sanctuary. Set within ancient
            bushland, our off-grid eco-pods and luxurious wellness facilities offer guests an opportunity to reconnect,
            reset, and rediscover natural healing. Through personalized wellness programs, yoga, meditation, educational
            workshops, and therapeutic treatments, guests experience the profound restorative power of nature.
          </p>
        </div>
      </div>

      {/* Background Image */}
      <Image
        className='absolute inset-0 z-0 h-full w-full object-cover'
        src={'/assets/images/background/woman-in-bathtub.png'}
        alt='Woman in Bathtub Background'
        loading='lazy'
        fill
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-[rgba(61,26,10,0.40)]' />
    </section>
  )
}
