'use client'
import React, { useRef, useEffect, useState } from 'react'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'
import Image from 'next/image'

export default function TheShiftAnimatedImage() {
  const { isMobile } = useWindowWidthContext()
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)

  const IMAGE_WIDTH = isMobile ? 207 : 330
  const IMAGE_HEIGHT = isMobile ? 206 : 329

  // Calculate the final size (25% larger)
  const finalImageWidth = IMAGE_WIDTH * 1.25
  const finalImageHeight = IMAGE_HEIGHT * 1.25

  // Calculate current size based on animation progress
  const currentWidth = IMAGE_WIDTH + (finalImageWidth - IMAGE_WIDTH) * animationProgress
  const currentHeight = IMAGE_HEIGHT + (finalImageHeight - IMAGE_HEIGHT) * animationProgress

  // Calculate current rotation (from -15 to 0 degrees)
  const currentRotation = -15 + 15 * animationProgress

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
      className='relative mx-auto flex items-center justify-center'
      style={{ height: `${finalImageHeight}px`, width: `${finalImageWidth}px` }}
    >
      <Image
        src='/assets/images/abstract/six-balls-moving-from-center.svg'
        alt='The Shift'
        width={currentWidth}
        height={currentHeight}
        className='max-w-none'
        style={{
          transform: `rotate(${currentRotation}deg)`,
          transition: 'transform 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out',
        }}
      />
    </div>
  )
}
