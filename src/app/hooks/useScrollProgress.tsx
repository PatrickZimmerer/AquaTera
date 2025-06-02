'use client'
import { useEffect, useRef, useState } from 'react'

interface UseScrollProgressOptions {
  startBuffer?: number // Percentage of section that needs to enter before animation starts (default: 25%)
  endBuffer?: number // Percentage of section that needs to leave before animation completes (default: 25%)
}

export const useScrollProgress = (options: UseScrollProgressOptions = {}) => {
  const { startBuffer = 0.25, endBuffer = 0.25 } = options
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      // Define animation points with custom buffers
      // Start when specified % of section has entered viewport
      // Complete when specified % of section has left viewport
      const startPoint = windowHeight - startBuffer * sectionHeight // Section top when start% has entered
      const endPoint = -(endBuffer * sectionHeight) // Section top when end% has left viewport
      const sectionTop = rect.top

      let progress = 0

      if (sectionTop <= endPoint) {
        // Specified % of section has left viewport => 100% progress
        progress = 1
      } else if (sectionTop < startPoint) {
        // Section is in the animation range - calculate linear progress
        progress = 1 - (sectionTop - endPoint) / (startPoint - endPoint)
      }
      // If sectionTop >= startPoint, progress stays 0 (not enough section has entered yet)

      // Clamp progress between 0 and 1, then convert to percentage
      progress = Math.max(0, Math.min(1, progress))
      setScrollProgress(progress * 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [startBuffer, endBuffer])

  return {
    sectionRef,
    scrollProgress,
  }
}
