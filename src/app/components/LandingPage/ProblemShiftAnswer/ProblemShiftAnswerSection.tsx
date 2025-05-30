import React from 'react'
import TheProblemSection from './TheProblemSection'
import TheShiftSection from './TheShiftSection'
import TheAnswerSection from './TheAnswerSection'
import BigBlueBackgroundCircle from './BigBlueBackgroundCircle'

export default function ProblemShiftAnswerSection() {
  return (
    <section className='bg-secondary z-30 w-full'>
      <div className='side-padding relative flex flex-col gap-y-8 py-16 md:items-center md:gap-y-0 md:py-24'>
        <TheProblemSection />

        <TheShiftSection />

        <TheAnswerSection />

        <BigBlueBackgroundCircle />
      </div>
    </section>
  )
}
