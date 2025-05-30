import React from 'react'
import LevitatingBackgroundImage from '../reusable/LevitatingBackgroundImage'

export default function HeroBackgroundCircleCluster({ isMobile }: { isMobile: boolean }) {
  const circleAnimationAmplitude = isMobile ? 30 : -100
  const circleAnimationDuration = isMobile ? 12 : 14
  const BALL_SIZE = isMobile ? 65 : 140

  const TOP_BACKGROUND_BALL_BOTTOM_POSITION = isMobile ? '10.25rem' : '-6rem'
  const TOP_BACKGROUND_BALL_LEFT_POSITION = isMobile ? '3.7rem' : '18rem'

  const RIGHT_BACKGROUND_BALL_BOTTOM_POSITION = isMobile ? '6.75rem' : '-13.5rem'
  const RIGHT_BACKGROUND_BALL_LEFT_POSITION = isMobile ? '5rem' : '20.5rem'

  const BOTTOM_BACKGROUND_BALL_BOTTOM_POSITION = isMobile ? '5.5rem' : '-17rem'
  const BOTTOM_BACKGROUND_BALL_LEFT_POSITION = isMobile ? '1.7rem' : '13.5rem'

  const LEFT_BACKGROUND_BALL_BOTTOM_POSITION = isMobile ? '8.5rem' : '-9rem'
  const LEFT_BACKGROUND_BALL_LEFT_POSITION = isMobile ? '0.7rem' : '11rem'

  const CENTER_BACKGROUND_BALL_BOTTOM_POSITION = isMobile ? '7.5rem' : '-12rem'
  const CENTER_BACKGROUND_BALL_LEFT_POSITION = isMobile ? '2.7rem' : '16rem'

  return (
    <>
      <LevitatingBackgroundImage
        className='z-10'
        animationAmplitudeY={circleAnimationAmplitude}
        animationDuration={circleAnimationDuration}
        animationDirection={'Y'}
        imageHeight={BALL_SIZE}
        imageWidth={BALL_SIZE}
        imagePath='/assets/images/abstract/hero-ball-cluster-top.svg'
        imageAlt='Ball'
        bottomPosition={TOP_BACKGROUND_BALL_BOTTOM_POSITION}
        leftPosition={TOP_BACKGROUND_BALL_LEFT_POSITION}
      />

      <LevitatingBackgroundImage
        className='z-20'
        animationAmplitudeY={circleAnimationAmplitude}
        animationDuration={circleAnimationDuration}
        animationDirection={'Y'}
        imageHeight={BALL_SIZE}
        imageWidth={BALL_SIZE}
        imagePath='/assets/images/abstract/hero-ball-cluster-right.svg'
        imageAlt='Ball'
        bottomPosition={RIGHT_BACKGROUND_BALL_BOTTOM_POSITION}
        leftPosition={RIGHT_BACKGROUND_BALL_LEFT_POSITION}
      />

      <LevitatingBackgroundImage
        className='z-10'
        animationAmplitudeY={circleAnimationAmplitude}
        animationDuration={circleAnimationDuration}
        animationDirection={'Y'}
        imageHeight={BALL_SIZE}
        imageWidth={BALL_SIZE}
        imagePath='/assets/images/abstract/hero-ball-cluster-bottom.svg'
        imageAlt='Ball'
        bottomPosition={BOTTOM_BACKGROUND_BALL_BOTTOM_POSITION}
        leftPosition={BOTTOM_BACKGROUND_BALL_LEFT_POSITION}
      />

      <LevitatingBackgroundImage
        className='z-20'
        animationAmplitudeY={circleAnimationAmplitude}
        animationDuration={circleAnimationDuration}
        animationDirection={'Y'}
        imageHeight={BALL_SIZE}
        imageWidth={BALL_SIZE}
        imagePath='/assets/images/abstract/hero-ball-cluster-left.svg'
        imageAlt='Ball'
        bottomPosition={LEFT_BACKGROUND_BALL_BOTTOM_POSITION}
        leftPosition={LEFT_BACKGROUND_BALL_LEFT_POSITION}
      />

      <LevitatingBackgroundImage
        className='z-[100]'
        animationAmplitudeY={circleAnimationAmplitude}
        animationDuration={circleAnimationDuration}
        animationDirection={'Y'}
        imageHeight={BALL_SIZE}
        imageWidth={BALL_SIZE}
        imagePath='/assets/images/abstract/hero-ball-top-right.svg'
        imageAlt='Ball'
        bottomPosition={CENTER_BACKGROUND_BALL_BOTTOM_POSITION}
        leftPosition={CENTER_BACKGROUND_BALL_LEFT_POSITION}
      />
    </>
  )
}
