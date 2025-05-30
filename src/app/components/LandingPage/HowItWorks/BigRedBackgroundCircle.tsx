import React from 'react'
import LevitatingBackgroundImage from '../reusable/LevitatingBackgroundImage'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function BigRedBackgroundCircle() {
  const { isMobile } = useWindowWidthContext()

  const BIG_BACKGROUND_BALL_SIZE = isMobile ? 554 : 1192

  const BIG_BACKGROUND_BALL_TOP_POSITION = isMobile ? BIG_BACKGROUND_BALL_SIZE * 0.25 * -1 + 'px' : ''
  const BIG_BACKGROUND_BALL_BOTTOM_POSITION = isMobile ? '' : '0'

  const BIG_BACKGROUND_BALL_RIGHT_POSITION = isMobile
    ? BIG_BACKGROUND_BALL_SIZE * 0.55 * -1 + 'px'
    : BIG_BACKGROUND_BALL_SIZE * 0.55 * -1 + 'px'

  const animationAmplitude = isMobile ? 100 : 200
  const animationDuration = isMobile ? 12 : 14

  return (
    <LevitatingBackgroundImage
      className='z-0'
      animationAmplitudeX={animationAmplitude}
      animationDuration={animationDuration}
      animationDirection={'X'}
      imageHeight={BIG_BACKGROUND_BALL_SIZE}
      imageWidth={BIG_BACKGROUND_BALL_SIZE}
      imagePath='/assets/images/abstract-bg/big-circle.svg'
      imageAlt='Circle'
      topPosition={BIG_BACKGROUND_BALL_TOP_POSITION}
      bottomPosition={BIG_BACKGROUND_BALL_BOTTOM_POSITION}
      rightPosition={BIG_BACKGROUND_BALL_RIGHT_POSITION}
    />
  )
}
