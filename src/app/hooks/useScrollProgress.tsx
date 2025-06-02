'use client'
import { useEffect, useRef, useState } from 'react'

export const useScrollProgress = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      // Define animation points with 25% buffers
      // Start when 25% of section has entered viewport
      // Complete when 25% of section has left viewport
      const startPoint = windowHeight - 0.25 * sectionHeight // Section top when 25% has entered
      const endPoint = -(0.25 * sectionHeight) // Section top when 25% has left viewport
      const sectionTop = rect.top

      let progress = 0

      if (sectionTop <= endPoint) {
        // 25% of section has left viewport => 100% progress
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
  }, [])

  return {
    sectionRef,
    scrollProgress,
  }
}
