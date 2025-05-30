import React from 'react'

import HeroBackgroundCircleCluster from './HeroBackgroundCircleCluster'
import LevitatingBackgroundImage from '../reusable/LevitatingBackgroundImage'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

function HeroBackgroundStarWithCircleCluster() {
  const { isMobile } = useWindowWidthContext()

  const SMALL_BACKGROUND_STAR_SIZE = isMobile ? 65 : 140

  const SMALL_BACKGROUND_STAR_BOTTOM_POSITION = isMobile ? '5.5rem' : '-12rem'
  const SMALL_BACKGROUND_STAR_LEFT_POSITION = isMobile ? '-2.5rem' : '14rem'

  const starAnimationAmplitudeX = isMobile ? 30 : 60
  const starAnimationAmplitudeY = isMobile ? 30 : 60
  const starAnimationDuration = isMobile ? 13 : 15

  return (
    <>
      <HeroBackgroundCircleCluster isMobile={isMobile} />

      <LevitatingBackgroundImage
        className='z-30'
        animationAmplitudeX={starAnimationAmplitudeX}
        animationAmplitudeY={starAnimationAmplitudeY}
        animationDuration={starAnimationDuration}
        animationDirection={'XY'}
        imageHeight={SMALL_BACKGROUND_STAR_SIZE}
        imageWidth={SMALL_BACKGROUND_STAR_SIZE}
        imagePath='/assets/images/abstract/white-star.svg'
        imageAlt='Star'
        bottomPosition={SMALL_BACKGROUND_STAR_BOTTOM_POSITION}
        leftPosition={SMALL_BACKGROUND_STAR_LEFT_POSITION}
      />
    </>
  )
}

export default HeroBackgroundStarWithCircleCluster
