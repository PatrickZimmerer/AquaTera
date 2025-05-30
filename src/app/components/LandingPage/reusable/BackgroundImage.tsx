import React from 'react'
import { cn } from '../../../../utils/utils'
import Image from 'next/image'

interface BackgroundImageProps {
  imagePath: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
  topPosition?: string
  leftPosition?: string
  bottomPosition?: string
  rightPosition?: string
  className?: string
}

export default function BackgroundImage({
  imagePath,
  imageWidth,
  imageHeight,
  imageAlt,
  topPosition,
  leftPosition,
  bottomPosition,
  rightPosition,
  className,
}: BackgroundImageProps) {
  return (
    <div
      className={cn('absolute z-0 overflow-hidden', className)}
      style={{
        position: 'absolute',
        top: topPosition ? `${topPosition}` : undefined,
        left: leftPosition ? `${leftPosition}` : undefined,
        bottom: bottomPosition ? `${bottomPosition}` : undefined,
        right: rightPosition ? `${rightPosition}` : undefined,
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
