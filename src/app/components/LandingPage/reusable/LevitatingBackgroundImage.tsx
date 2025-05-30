import React from 'react'
import { cn } from '../../../../utils/utils'
import Image from 'next/image'

interface LevitatingBackgroundImageProps {
  imagePath: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
  animationDirection?: 'X' | 'Y' | 'XY'
  animationAmplitudeX?: number
  animationAmplitudeY?: number
  animationDuration?: number
  topPosition?: string
  leftPosition?: string
  bottomPosition?: string
  rightPosition?: string
  className?: string
}

export default function LevitatingBackgroundImage({
  imagePath,
  imageWidth,
  imageHeight,
  imageAlt,
  animationDirection = 'X',
  animationAmplitudeX = 150,
  animationAmplitudeY = 150,
  animationDuration = 6,
  topPosition,
  leftPosition,
  bottomPosition,
  rightPosition,
  className,
}: LevitatingBackgroundImageProps) {
  const animationStyle = {
    '--levitate-duration': `${animationDuration}s`,
    '--levitate-amplitude-x': `${animationAmplitudeX}px`,
    '--levitate-amplitude-y': `${animationAmplitudeY}px`,
  } as React.CSSProperties

  const levitatingClassName =
    animationDirection === 'X'
      ? 'animate-levitateX'
      : animationDirection === 'Y'
        ? 'animate-levitateY'
        : 'animate-levitateXY'

  return (
    <div
      className={cn(levitatingClassName, 'absolute z-0 overflow-hidden', className)}
      style={{
        position: 'absolute',
        top: topPosition ? `${topPosition}` : undefined,
        left: leftPosition ? `${leftPosition}` : undefined,
        bottom: bottomPosition ? `${bottomPosition}` : undefined,
        right: rightPosition ? `${rightPosition}` : undefined,
        ...animationStyle,
      }}
    >
      <Image
        className={`max-w-none`}
        style={{
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
        }}
        src={imagePath}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        priority
      />
    </div>
  )
}
