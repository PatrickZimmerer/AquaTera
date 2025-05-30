import React from 'react'
import WhatChangesHeaderSection from './WhatChangesHeaderSection'
import WhatChangesImageSection from './WhatChangesImageSection'
import WhatChangesTextSection from './WhatChangesTextSection'
import WhatChangesBackgroundCircle from './WhatChangesBackgroundCircle'

export default function WhatChangesSection() {
  return (
    <section className='bg-secondary z-10 w-full'>
      <div className='side-padding relative flex flex-col gap-y-10 py-12 md:items-center md:justify-center lg:gap-y-16 lg:py-24'>
        <WhatChangesHeaderSection />

        <WhatChangesImageSection />

        <WhatChangesTextSection />

        <WhatChangesBackgroundCircle />
      </div>
    </section>
  )
}
