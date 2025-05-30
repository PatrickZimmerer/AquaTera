'use client'
import React from 'react'

import LevitatingBackgroundImage from '../reusable/LevitatingBackgroundImage'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function HeroBackgroundStarWithCircleSmallTopRight() {
  const { isMobile } = useWindowWidthContext()

  const SMALL_BACKGROUND_BALL_SIZE = isMobile ? 65 : 140
  const SMALL_BACKGROUND_STAR_SIZE = isMobile ? 65 : 140

  const SMALL_BACKGROUND_BALL_TOP_POSITION = isMobile ? '-2.75rem' : '-11rem'
  const SMALL_BACKGROUND_BALL_RIGHT_POSITION = isMobile ? '6.5rem' : '6.5rem'

  const SMALL_BACKGROUND_STAR_TOP_POSITION = isMobile ? '-4.5rem' : '-11rem'
  const SMALL_BACKGROUND_STAR_RIGHT_POSITION = isMobile ? '4.4rem' : '14rem'

  const circleAnimationAmplitude = isMobile ? 30 : 80
  const circleAnimationDuration = isMobile ? 8 : 12

  const starAnimationAmplitudeY = isMobile ? 30 : 60
  const starAnimationDuration = isMobile ? 14 : 16

  return (
    <>
      <LevitatingBackgroundImage
        className='z-10'
        animationAmplitudeY={circleAnimationAmplitude}
        animationDuration={circleAnimationDuration}
        animationDirection={'Y'}
        imageHeight={SMALL_BACKGROUND_BALL_SIZE}
        imageWidth={SMALL_BACKGROUND_BALL_SIZE}
        imagePath='/assets/images/abstract/hero-ball-top-right.svg'
        imageAlt='Ball'
        topPosition={SMALL_BACKGROUND_BALL_TOP_POSITION}
        rightPosition={SMALL_BACKGROUND_BALL_RIGHT_POSITION}
      />

      <LevitatingBackgroundImage
        className='z-0'
        animationAmplitudeY={starAnimationAmplitudeY}
        animationDuration={starAnimationDuration}
        animationDirection={'Y'}
        imageHeight={SMALL_BACKGROUND_STAR_SIZE}
        imageWidth={SMALL_BACKGROUND_STAR_SIZE}
        imagePath='/assets/images/abstract/white-star.svg'
        imageAlt='Star'
        topPosition={SMALL_BACKGROUND_STAR_TOP_POSITION}
        rightPosition={SMALL_BACKGROUND_STAR_RIGHT_POSITION}
      />
    </>
  )
}
