import React from 'react'
import Image from 'next/image'

export default function WellnessSection() {
  return (
    <section id='wellness' className='text-primary relative h-fit w-full overflow-hidden pt-24 pb-48 md:max-h-[80rem]'>
      <div className='side-padding mt-auto flex h-full flex-col'>
        <div className='z-20 flex h-full max-w-[33.3125rem] flex-col justify-end gap-y-4 pb-16 md:mr-44 md:ml-auto md:justify-start md:gap-y-6 md:pt-36'>
          <h3
            data-aos='fade-left'
            className='text-[1.625rem] leading-[100%] tracking-[-0.04875rem] md:text-[2.5rem] md:tracking-[-0.075rem] 2xl:text-[3.5rem]'
          >
            Future <br />
            Wellness Retreat
          </h3>

          <div className='font-dmSans flex flex-col gap-y-6'>
            <p data-aos='fade-left' className='font-dmSans text-[0.9375rem] leading-[140%] md:text-lg'>
              Planned as a future extension of the Aquatera ecosystem, our wellness retreat will offer a unique
              sanctuary for integrated healing and education. Nestled within ancient bushland, the retreat will feature
              off-grid eco-pods and thoughtfully designed wellness facilities—providing space for guests to reconnect
              with nature and themselves.
            </p>

            <p data-aos='fade-left' className='font-dmSans text-[0.9375rem] leading-[140%] md:text-lg'>
              The retreat will embody Aquatera’s vision of holistic, evidence-aligned wellbeing. Designed to complement
              our medical and research initiatives, it will serve as a space where science, nature, and human experience
              come together.
            </p>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <Image
        className='absolute inset-0 z-0 h-full w-full object-cover max-lg:hidden'
        src={'/assets/images/background/woman-meditating-desktop.png'}
        alt='Woman Meditating Background'
        loading='lazy'
        fill
      />

      <Image
        className='absolute inset-0 z-0 h-full w-full object-cover lg:hidden'
        src={'/assets/images/background/woman-meditating-mobile.png'}
        alt='Woman Meditating Background'
        loading='lazy'
        fill
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-[rgba(61,26,10,0.40)]' />
    </section>
  )
}
