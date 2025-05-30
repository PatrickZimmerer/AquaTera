import Image from 'next/image'
import React from 'react'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'
import { Parallax } from 'react-scroll-parallax'

export default function HowItWorksImageSection() {
  const { isMobile } = useWindowWidthContext()

  const IMAGE_WIDTH = isMobile ? 313 : 563
  const IMAGE_HEIGHT = isMobile ? 312 : 561

  return (
    <Parallax speed={isMobile ? 10 : 20}>
      <Image
        className='z-10 mx-auto lg:mx-0'
        src='/assets/images/avalanche-core.svg'
        alt='How It Works Image'
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
      />
    </Parallax>
  )
}
