'use client'
import React from 'react'
import LevitatingBackgroundImage from '../reusable/LevitatingBackgroundImage'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function HeroBackgroundCircleSmallBottomRight() {
  const { isMobile } = useWindowWidthContext()

  const SMALL_BACKGROUND_BALL_SIZE = isMobile ? 65 : 140

  const SMALL_BACKGROUND_BALL_BOTTOM_POSITION = isMobile ? '-1rem' : '-11rem'
  const SMALL_BACKGROUND_BALL_RIGHT_POSITION = isMobile ? '3rem' : '14rem'

  const animationAmplitude = isMobile ? -30 : -80
  const animationDuration = isMobile ? 10 : 12

  return (
    <LevitatingBackgroundImage
      animationAmplitudeY={animationAmplitude}
      animationDuration={animationDuration}
      animationDirection={'Y'}
      imageHeight={SMALL_BACKGROUND_BALL_SIZE}
      imageWidth={SMALL_BACKGROUND_BALL_SIZE}
      imagePath='/assets/images/abstract/hero-ball-bottom-right.svg'
      imageAlt='Ball'
      bottomPosition={SMALL_BACKGROUND_BALL_BOTTOM_POSITION}
      rightPosition={SMALL_BACKGROUND_BALL_RIGHT_POSITION}
    />
  )
}
