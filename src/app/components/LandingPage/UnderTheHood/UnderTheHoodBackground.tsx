import React, { useRef, useEffect, useState } from 'react'
import { useWindowWidthContext } from '@/app/providers/WindowWidthProvider'
import Image from 'next/image'

export default function UnderTheHoodBackground() {
  const { isMobile } = useWindowWidthContext()
  const [isInView, setIsInView] = useState(false)
  const [clockwiseRotation, setClockwiseRotation] = useState(0)
  const [counterClockwiseRotation, setCounterClockwiseRotation] = useState(0)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const accumulatedRotation = useRef({ clockwise: 0, counterClockwise: 0 })

  const SMALL_CIRCLE_SIZE = isMobile ? 590 : 1042
  const LARGE_CIRCLE_SIZE = isMobile ? 900 : 1587

  const ROTATION_SCALE_FACTOR = isMobile ? 0.5 : 0.2

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)

        // Store initial scroll position when element comes into view
        if (entry.isIntersecting) {
          lastScrollY.current = window.scrollY
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = backgroundRef.current

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
    const handleScroll = () => {
      if (!isInView) return

      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY.current

      // Update accumulated rotation values
      accumulatedRotation.current.clockwise += scrollDelta * ROTATION_SCALE_FACTOR
      accumulatedRotation.current.counterClockwise -= scrollDelta * ROTATION_SCALE_FACTOR

      // Update state only when needed for better performance
      requestAnimationFrame(() => {
        setClockwiseRotation(accumulatedRotation.current.clockwise)
        setCounterClockwiseRotation(accumulatedRotation.current.counterClockwise)
      })

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isInView, ROTATION_SCALE_FACTOR])

  return (
    <div ref={backgroundRef} className='absolute inset-0 z-0 flex items-center justify-center'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Image
          className='relative z-[6] max-w-none'
          style={{
            transform: `rotate(${clockwiseRotation}deg)`,
            transition: 'transform 0.1s ease-out',
            width: `${SMALL_CIRCLE_SIZE}px`,
            height: `${SMALL_CIRCLE_SIZE}px`,
          }}
          src={'/assets/images/abstract-bg/huge-circle-front.svg'}
          alt='Circle Small'
          width={SMALL_CIRCLE_SIZE}
          height={SMALL_CIRCLE_SIZE}
          priority
        />
        <Image
          className='absolute top-1/2 left-1/2 z-[5] max-w-none -translate-x-1/2 -translate-y-1/2'
          style={{
            transform: `rotate(${counterClockwiseRotation}deg)`,
            transition: 'transform 0.1s ease-out',
            width: `${LARGE_CIRCLE_SIZE}px`,
            height: `${LARGE_CIRCLE_SIZE}px`,
          }}
          src={'/assets/images/abstract-bg/huge-circle-back.svg'}
          alt='Circle Large'
          width={LARGE_CIRCLE_SIZE}
          height={LARGE_CIRCLE_SIZE}
          priority
        />
      </div>
    </div>
  )
}
