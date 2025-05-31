import React from 'react'
import Image from 'next/image'

export default function ProductsAndServicesSection() {
  return (
    <section id='products' className='h-[42rem] w-full overflow-hidden md:h-[60rem]'>
      <div className='side-padding relative mt-auto flex h-full flex-col'>
        <div
          data-aos={'fade-right'}
          data-aos-offset='200'
          className='z-20 mt-16 flex h-full max-w-[33.5rem] flex-col gap-y-4 md:mt-40 md:ml-32'
        >
          <h3 className='text-[1.625rem] leading-[100%] tracking-[-0.04875rem] md:text-[2.5rem] md:tracking-[-0.075rem] 2xl:text-[3.5rem]'>
            Products <br />
            and Services
          </h3>

          <p className='font-dmSans max-w-[19.5rem] text-[0.9375rem] leading-[140%] md:max-w-[33.3125rem] md:text-lg'>
            At AquaTera, we craft a diverse range of premium medical cannabis products, each rooted deeply in care. Our
            meticulously developed medicinal formulations, specialized pet care products, and luxurious organic cosmetic
            ranges are created through close collaboration with Australia’s leading universities and industry
            innovators. Every AquaTera product embodies our dedication to quality, responsibility, and authentic
            wellness.
          </p>
        </div>
        <Image
          data-aos='fade-left'
          data-aos-offset='400'
          className='absolute right-0 bottom-0 md:hidden'
          src={'/assets/images/background/aqua-tera-jar-mobile.png'}
          alt='Aqua Tera Jar'
          width={371}
          height={427}
        />

        <Image
          data-aos='fade-left'
          data-aos-offset='620'
          className='absolute bottom-16 left-[30rem] hidden md:block'
          src={'/assets/images/background/aqua-tera-jar-desktop.png'}
          alt='Aqua Tera Jar'
          width={1122}
          height={842}
        />
      </div>
    </section>
  )
}
