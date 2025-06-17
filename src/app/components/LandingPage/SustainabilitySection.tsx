import React from 'react'
import Image from 'next/image'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useWindowWidthContext } from '../../providers/WindowWidthProvider'

export default function SustainabilitySection() {
  const { isMobile } = useWindowWidthContext()
  const { sectionRef, scrollProgress } = useScrollProgress({
    startBuffer: isMobile ? 0.5 : 0.25,
    endBuffer: isMobile ? 0.5 : 0.25,
  })

  const BG_IMAGE_WIDTH = 1523
  const BG_IMAGE_HEIGHT = 678
  const IMAGE_ASPECT_RATIO = BG_IMAGE_HEIGHT / BG_IMAGE_WIDTH // 0.445

  return (
    <section
      ref={sectionRef}
      id='sustainability'
      className='relative h-fit w-full overflow-hidden py-16 max-md:min-h-dvh md:py-60'
    >
      <div className='side-padding relative flex h-full flex-col justify-center'>
        <div className='mx-auto flex w-full max-w-[66rem] flex-col items-center gap-y-8'>
          <p
            data-aos='fade-right'
            className='z-20 max-w-[41rem] text-center leading-[120%] tracking-[-0.03rem] md:self-start md:text-start md:text-2xl md:tracking-[0.045rem]'
          >
            The spirit of the River Murray flows through our approach to sustainability. AquaTera&apos;s organic
            cultivation practices incorporate regenerative agriculture, renewable energy, precision irrigation, and
            advanced AI-driven systems.
          </p>

          <h3
            data-aos='fade-in'
            className='z-20 text-4xl leading-[100%] tracking-[-0.07rem] md:text-[3.75rem] md:tracking-[-0.1125rem]'
          >
            Sustainability
          </h3>

          <p
            data-aos='fade-left'
            className='z-20 max-w-[41rem] text-center leading-[120%] tracking-[-0.03rem] md:self-end md:text-start md:text-2xl md:tracking-[0.045rem]'
          >
            Our responsibility extends beyond our products, we actively protect the ecological integrity of the
            Riverland, ensuring long-term sustainability and resilience for future generations.
          </p>
        </div>

        {/* Mobile Background Image */}
        <Image
          src='/assets/images/background/white-road.svg'
          alt='White Road'
          width={BG_IMAGE_WIDTH}
          height={BG_IMAGE_HEIGHT}
          className='absolute z-0 max-w-none object-cover md:hidden'
          style={{
            top: '45%',
            left: BG_IMAGE_WIDTH * -0.1 + 'px',
          }}
        />

        {/* Mobile Overlay */}
        <div
          className='bg-primary absolute z-10 md:hidden'
          style={{
            top: '45%',
            left: BG_IMAGE_WIDTH * -0.1 + 'px',
            width: BG_IMAGE_WIDTH + 'px',
            height: BG_IMAGE_HEIGHT + 'px',
            transform: `translateX(${scrollProgress}%)`,
          }}
        />
      </div>

      {/* Desktop Background Image */}
      <Image
        src='/assets/images/background/white-road.svg'
        alt='White Road'
        width={BG_IMAGE_WIDTH}
        height={BG_IMAGE_HEIGHT}
        className='absolute top-1/4 left-0 z-0 hidden w-screen max-w-none object-cover md:block'
      />

      {/* Desktop Overlay */}
      <div
        className='bg-primary absolute top-1/4 left-0 z-10 hidden w-screen md:block'
        style={{
          height: `calc(100vw * ${IMAGE_ASPECT_RATIO})`,
          transform: `translateX(${scrollProgress}%)`,
        }}
      />
    </section>
  )
}
