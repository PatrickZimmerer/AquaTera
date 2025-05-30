'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowWidthContext } from '../../../providers/WindowWidthProvider'

export default function TheAnswerAnimatedImage() {
  const { isMobile } = useWindowWidthContext()
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)

  // Define sizes for the balls
  const CIRCLE_SIZE = isMobile ? 143 : 206

  // Define starting positions with offsets from center
  const topOffset = isMobile ? -45 : -65
  const leftOffset = isMobile ? -45 : -65
  const rightOffset = isMobile ? 45 : 65
  const bottomOffset = isMobile ? 45 : 65

  // Calculate position styles based on animation progress
  const getPositionStyle = (startX: number, startY: number) => {
    return {
      transform: `translate(${startX * (1 - animationProgress)}px, ${startY * (1 - animationProgress)}px)`,
      transition: 'transform 0.1s ease-out',
    }
  }

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
      const endPoint = windowHeight / 2
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
      ref={containerRef}
      className='relative mx-auto px-4'
      style={{
        height: `${CIRCLE_SIZE * 1.85}px`,
        width: `${CIRCLE_SIZE * 1.85}px`,
      }}
    >
      {/* Center ball - stays fixed in the center */}
      <div className='absolute top-1/2 left-1/2 z-[9] -translate-x-1/2 -translate-y-1/2'>
        <Image
          src='/assets/images/abstract/five-balls-center.svg'
          alt='Center Ball'
          width={CIRCLE_SIZE}
          height={CIRCLE_SIZE}
          className='max-w-none'
        />
      </div>

      {/* Top ball - moves from top to center */}
      <div className='absolute top-0 left-1/2 z-[7] -translate-x-1/2' style={getPositionStyle(0, topOffset)}>
        <Image
          src='/assets/images/abstract/five-balls-top.svg'
          alt='Top Ball'
          width={CIRCLE_SIZE}
          height={CIRCLE_SIZE}
          className='max-w-none'
        />
      </div>

      {/* Left ball - moves from left to center */}
      <div className='absolute top-1/2 left-0 z-[8] -translate-y-1/2' style={getPositionStyle(leftOffset, 0)}>
        <Image
          src='/assets/images/abstract/five-balls-left.svg'
          alt='Left Ball'
          width={CIRCLE_SIZE}
          height={CIRCLE_SIZE}
          className='max-w-none'
        />
      </div>

      {/* Right ball - moves from right to center */}
      <div className='absolute top-1/2 right-0 z-[8] -translate-y-1/2' style={getPositionStyle(rightOffset, 0)}>
        <Image
          src='/assets/images/abstract/five-balls-right.svg'
          alt='Right Ball'
          width={CIRCLE_SIZE}
          height={CIRCLE_SIZE}
          className='max-w-none'
        />
      </div>

      {/* Bottom ball - moves from bottom to center */}
      <div className='absolute bottom-0 left-1/2 z-[7] -translate-x-1/2' style={getPositionStyle(0, bottomOffset)}>
        <Image
          src='/assets/images/abstract/five-balls-bottom.svg'
          alt='Bottom Ball'
          width={CIRCLE_SIZE}
          height={CIRCLE_SIZE}
          className='max-w-none'
        />
      </div>
    </div>
  )
}
