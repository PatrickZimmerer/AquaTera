import React from 'react'
import LevitatingBackgroundImage from '../reusable/LevitatingBackgroundImage'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function WhatChangesBackgroundCircle() {
  const { isMobile } = useWindowWidthContext()

  const BIG_BACKGROUND_BALL_SIZE = 1075

  const BIG_BACKGROUND_BALL_TOP_POSITION = BIG_BACKGROUND_BALL_SIZE * 0.42 * -1 + 'px'

  return (
    <>
      {isMobile ? null : (
        <LevitatingBackgroundImage
          className='z-0 rotate-90'
          animationAmplitudeX={-120}
          animationDuration={14}
          animationDirection={'X'}
          imageHeight={BIG_BACKGROUND_BALL_SIZE}
          imageWidth={BIG_BACKGROUND_BALL_SIZE}
          imagePath='/assets/images/abstract-bg/big-circle-blue.svg'
          imageAlt='Circle'
          topPosition={BIG_BACKGROUND_BALL_TOP_POSITION}
        />
      )}
    </>
  )
}
