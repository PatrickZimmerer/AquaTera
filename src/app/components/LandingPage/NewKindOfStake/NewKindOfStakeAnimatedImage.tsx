import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function NewKindOfStakeAnimatedImage() {
  const { isMobile } = useWindowWidthContext()
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)

  const FRONT_CIRCLES_SIZE = isMobile ? 191 : 254
  const MIDDLE_CIRCLES_SIZE = isMobile ? 268 : 356
  const BACK_CIRCLES_SIZE = isMobile ? 345 : 459

  // Initial sizes for middle and back circles (same as front circle to start)
  const initialMiddleSize = FRONT_CIRCLES_SIZE
  const initialBackSize = FRONT_CIRCLES_SIZE

  // Calculate current sizes based on animation progress
  const currentMiddleSize = initialMiddleSize + (MIDDLE_CIRCLES_SIZE - initialMiddleSize) * animationProgress
  const currentBackSize = initialBackSize + (BACK_CIRCLES_SIZE - initialBackSize) * animationProgress

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsInView(entry.isIntersecting)
    })

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate progress based on position
      // Start when bottom of element enters viewport
      // Complete when bottom of element reaches middle of screen
      const startPoint = windowHeight
      const endPoint = isMobile ? windowHeight / 1.8 : windowHeight / 1.9
      const bottomPosition = rect.bottom

      let progress = 0
      if (bottomPosition < endPoint) {
        progress = 1 // Animation complete
      } else if (bottomPosition < startPoint) {
        progress = 1 - (bottomPosition - endPoint) / (startPoint - endPoint)
      }

      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress))
      setAnimationProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isInView])

  return (
    <div
      style={{ height: BACK_CIRCLES_SIZE + 'px' }}
      ref={containerRef}
      className='relative mx-auto flex items-end justify-center'
    >
      <div className='relative flex items-end justify-center'>
        {/* Back circle (grows first) */}
        <Image
          className='absolute z-[1] max-w-none'
          style={{
            width: `${currentBackSize}px`,
            height: `${currentBackSize}px`,
            opacity: animationProgress,
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            transition: 'width 0.1s ease-out, height 0.1s ease-out, opacity 0.1s ease-out',
          }}
          width={BACK_CIRCLES_SIZE}
          height={BACK_CIRCLES_SIZE}
          alt='Circle Back'
          src={'/assets/images/abstract/blue-circle-back.svg'}
        />

        {/* Middle circle */}
        <Image
          className='absolute z-[2] max-w-none'
          style={{
            width: `${currentMiddleSize}px`,
            height: `${currentMiddleSize}px`,
            opacity: animationProgress,
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            transition: 'width 0.1s ease-out, height 0.1s ease-out, opacity 0.1s ease-out',
          }}
          width={MIDDLE_CIRCLES_SIZE}
          height={MIDDLE_CIRCLES_SIZE}
          alt='Circle Middle'
          src={'/assets/images/abstract/blue-circle-middle.svg'}
        />

        {/* Front circle (always visible) */}
        <Image
          className='relative z-[3] max-w-none'
          style={{
            width: `${FRONT_CIRCLES_SIZE}px`,
            height: `${FRONT_CIRCLES_SIZE}px`,
            marginBottom: 0,
          }}
          width={FRONT_CIRCLES_SIZE}
          height={FRONT_CIRCLES_SIZE}
          alt='Circle Front'
          src={'/assets/images/abstract/blue-circle-front.svg'}
        />
      </div>
    </div>
  )
}
