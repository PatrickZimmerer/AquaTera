'use client'
import React from 'react'
import LevitatingBackgroundImage from '../reusable/LevitatingBackgroundImage'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function HeroBackgroundCircleBig() {
  const { isMobile } = useWindowWidthContext()

  const BIG_BACKGROUND_BALL_SIZE = 1192

  const BIG_BACKGROUND_BALL_BOTTOM_POSITION = isMobile ? '31vh' : '37vh'
  const BIG_BACKGROUND_BALL_RIGHT_POSITION = isMobile ? '0' : '20vw'

  return (
    <LevitatingBackgroundImage
      className='z-0'
      animationAmplitudeX={250}
      animationDuration={12}
      animationDirection={'X'}
      imageHeight={BIG_BACKGROUND_BALL_SIZE}
      imageWidth={BIG_BACKGROUND_BALL_SIZE}
      imagePath='/assets/images/abstract-bg/big-circle.svg'
      imageAlt='Circle'
      bottomPosition={BIG_BACKGROUND_BALL_BOTTOM_POSITION}
      rightPosition={BIG_BACKGROUND_BALL_RIGHT_POSITION}
    />
  )
}
