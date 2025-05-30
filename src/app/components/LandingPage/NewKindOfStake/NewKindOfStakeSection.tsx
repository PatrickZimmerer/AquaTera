import React from 'react'
import NewKindOfStakeContent from './NewKindOfStakeContent'
import NewKindOfStakeAnimatedImage from './NewKindOfStakeAnimatedImage'

export default function NewKindOfStakeSection() {
  return (
    <section className='bg-secondary z-20 w-full'>
      <div className='side-padding relative flex flex-col gap-y-6 py-14 md:items-center md:justify-center lg:gap-y-16 lg:py-20'>
        <NewKindOfStakeAnimatedImage />

        <NewKindOfStakeContent />
      </div>
    </section>
  )
}
