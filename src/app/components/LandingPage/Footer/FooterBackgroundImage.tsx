import Image from 'next/image'
import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useWindowWidthContext } from '../../../providers/WindowWidthProvider'

export default function FooterBackgroundImage() {
  const { isMobile } = useWindowWidthContext()
  const IMAGE_WIDTH = isMobile ? 686 : 1043
  const IMAGE_HEIGHT = isMobile ? 644 : 980
  const RIGHT_POSITION = isMobile ? 'unset' : IMAGE_WIDTH * 0.12 * -1 + 'px'
  const LEFT_POSITION = isMobile ? IMAGE_WIDTH * 0.25 * -1 + 'px' : 'unset'
  const BOTTOM_POSITION = isMobile ? IMAGE_HEIGHT * 0.02 * -1 + 'px' : 'unset'
  const TOP_POSITION = isMobile ? 'unset' : IMAGE_HEIGHT * 0.12 * -1 + 'px'
  const SPEED = isMobile ? 15 : 25

  return (
    <Parallax className='pointer-events-none absolute inset-0 z-0 h-full w-full select-none' speed={SPEED}>
      <div
        style={{
          position: 'absolute',
          right: RIGHT_POSITION,
          left: LEFT_POSITION,
          bottom: BOTTOM_POSITION,
          top: TOP_POSITION,
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
        }}
      >
        <Image
          src='/assets/images/abstract-bg/big-fusion-logo-red.svg'
          alt='Fusion logo'
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          className='object-contain'
          priority
        />
      </div>
    </Parallax>
  )
}
