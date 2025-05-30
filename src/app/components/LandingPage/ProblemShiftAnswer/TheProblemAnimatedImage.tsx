import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'

export default function TheProblemAnimatedImage() {
  const { isMobile } = useWindowWidthContext()
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)

  // Define the base size for the ellipses
  const ELLIPSE_WIDTH = isMobile ? 116 : 194
  const ELLIPSE_HEIGHT = isMobile ? 100 : 167

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
      // Complete when top of element reaches middle of screen
      const startPoint = windowHeight
      const endPoint = windowHeight / 2
      const bottomPosition = rect.bottom

      let progress = 0
      if (bottomPosition < startPoint) {
        if (bottomPosition < endPoint) {
          progress = 1 // Animation complete
        } else {
          // Calculate progress from 0 to 1
          progress = 1 - (bottomPosition - endPoint) / (startPoint - endPoint)
        }
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

  // Calculate the translation amounts based on animation progress
  const getTranslateStyle = (xOffset: number, yOffset: number) => {
    return {
      transform: `translate(${xOffset * animationProgress}px, ${-yOffset * animationProgress}px)`,
      transition: 'transform 0.1s ease-out',
    }
  }

  return (
    <div
      ref={containerRef}
      className='relative mr-4 flex items-center justify-center'
      style={{ height: `${ELLIPSE_HEIGHT * 2.2}px`, width: `${ELLIPSE_WIDTH * 2.2}px` }}
    >
      {/* First row - 2 ellipses */}
      <div className='absolute z-[8]' style={{ bottom: ELLIPSE_HEIGHT * 0.4 + 'px', left: ELLIPSE_WIDTH * 0.3 + 'px' }}>
        <Image
          src='/assets/images/abstract/ellipse.svg'
          alt='Ellipse 1'
          width={ELLIPSE_WIDTH}
          height={ELLIPSE_HEIGHT}
          className='max-w-none'
        />
      </div>
      <div className='absolute bottom-0 z-[8]' style={{ left: ELLIPSE_WIDTH * 0.8 + 'px' }}>
        <Image
          src='/assets/images/abstract/ellipse.svg'
          alt='Ellipse 2'
          width={ELLIPSE_WIDTH}
          height={ELLIPSE_HEIGHT}
          className='max-w-none'
        />
      </div>

      {/* Second row - 3 ellipses */}
      <div
        className='absolute left-0 z-[6]'
        style={{
          ...getTranslateStyle(ELLIPSE_WIDTH / 3.5, ELLIPSE_HEIGHT / 5),
          bottom: ELLIPSE_HEIGHT * 0.55 + 'px',
        }}
      >
        <Image
          src='/assets/images/abstract/ellipse.svg'
          alt='Ellipse 3'
          width={ELLIPSE_WIDTH}
          height={ELLIPSE_HEIGHT}
          className='max-w-none'
        />
      </div>
      <div
        className='absolute z-[6]'
        style={{
          left: ELLIPSE_WIDTH * 0.8 + 'px',
          bottom: ELLIPSE_HEIGHT * 0.45 + 'px',
        }}
      >
        <Image
          src='/assets/images/abstract/ellipse.svg'
          alt='Ellipse 4'
          width={ELLIPSE_WIDTH}
          height={ELLIPSE_HEIGHT}
          className='max-w-none'
        />
      </div>
      <div
        className='absolute right-0 bottom-0 z-[6]'
        style={getTranslateStyle(ELLIPSE_WIDTH * 0.15, ELLIPSE_HEIGHT * 0.1)}
      >
        <Image
          src='/assets/images/abstract/ellipse.svg'
          alt='Ellipse 5'
          width={ELLIPSE_WIDTH}
          height={ELLIPSE_HEIGHT}
          className='max-w-none'
        />
      </div>

      {/* Third row - 2 ellipses */}
      <div
        className='absolute z-[5]'
        style={{
          ...getTranslateStyle(ELLIPSE_WIDTH / 3.5, ELLIPSE_HEIGHT / 5),
          bottom: ELLIPSE_HEIGHT * 0.85 + 'px',
          left: ELLIPSE_WIDTH * 0.55 + 'px',
        }}
      >
        <Image
          src='/assets/images/abstract/ellipse.svg'
          alt='Ellipse 6'
          width={ELLIPSE_WIDTH}
          height={ELLIPSE_HEIGHT}
          className='max-w-none'
        />
      </div>
      <div
        className='absolute right-0 z-[5]'
        style={{
          ...getTranslateStyle(ELLIPSE_WIDTH * 0.15, ELLIPSE_HEIGHT * 0.1),
          bottom: ELLIPSE_HEIGHT * 0.55 + 'px',
        }}
      >
        <Image
          src='/assets/images/abstract/ellipse.svg'
          alt='Ellipse 7'
          width={ELLIPSE_WIDTH}
          height={ELLIPSE_HEIGHT}
          className='max-w-none'
        />
      </div>
    </div>
  )
}
