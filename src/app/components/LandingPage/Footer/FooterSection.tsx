import React from 'react'
import FooterBackgroundImage from './FooterBackgroundImage'
import FooterContent from './FooterContent'

export default function FooterSection() {
  return (
    <section className='bg-primary relative w-full overflow-hidden'>
      <div className='side-padding relative z-10 flex h-full flex-col justify-between gap-y-8 py-16'>
        <FooterContent />
        <FooterBackgroundImage />
      </div>
    </section>
  )
}
