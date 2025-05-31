import React from 'react'

export default function IntroductionSection() {
  return (
    <section className='relative h-dvh w-full overflow-hidden'>
      <div className='side-padding flex h-full flex-col justify-center'>
        <p className='z-20 mx-auto max-w-[68.5rem] text-center text-xl leading-[120%] tracking-[-0.0375rem] md:text-[2.5rem]'>
          Nestled in Barmera, along the banks of South Australia&apos;s majestic River Murray, AquaTera is dedicated to
          cultivating harmony between land, science, and self. We proudly offer sustainable, organic medical cannabis
          products, supported by innovative wellness solutions, cutting-edge research, and holistic experiences. At
          AquaTera, nature guides, science refines, and healing happens.
        </p>
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
