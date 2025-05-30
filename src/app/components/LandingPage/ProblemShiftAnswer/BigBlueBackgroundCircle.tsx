import React from 'react'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'
import LevitatingBackgroundImage from '../reusable/LevitatingBackgroundImage'

export default function BigBlueBackgroundCircle() {
  const { isAboveWidth } = useWindowWidthContext()
  const isDesktop = isAboveWidth(1280)

  const BIG_BACKGROUND_BALL_SIZE = 1080

  const BIG_BACKGROUND_BALL_BOTTOM_POSITION = isDesktop ? '0' : ''
  const BIG_BACKGROUND_BALL_LEFT_POSITION = isDesktop ? '-45%' : ''

  return (
    <>
      {isDesktop ? (
        <LevitatingBackgroundImage
          className='z-0'
          animationAmplitudeX={150}
          animationDuration={12}
          animationDirection={'X'}
          imageHeight={BIG_BACKGROUND_BALL_SIZE}
          imageWidth={BIG_BACKGROUND_BALL_SIZE}
          imagePath='/assets/images/abstract-bg/big-circle-blue.svg'
          imageAlt='Circle'
          bottomPosition={BIG_BACKGROUND_BALL_BOTTOM_POSITION}
          leftPosition={BIG_BACKGROUND_BALL_LEFT_POSITION}
        />
      ) : null}
    </>
  )
}
