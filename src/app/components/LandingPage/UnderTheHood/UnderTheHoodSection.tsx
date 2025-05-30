import React from 'react'
import UnderTheHoodContent from './UnderTheHoodContent'
import UnderTheHoodBackground from './UnderTheHoodBackground'

export default function UnderTheHoodSection() {
  return (
    <section className='bg-primary relative z-0 w-full overflow-visible'>
      {/* Background placed outside the side-padding container for full width */}
      <UnderTheHoodBackground />

      <div className='side-padding relative z-10 flex flex-col gap-y-10 py-16 md:items-center md:justify-center lg:gap-y-16 lg:py-72'>
        <UnderTheHoodContent />
      </div>
    </section>
  )
}
