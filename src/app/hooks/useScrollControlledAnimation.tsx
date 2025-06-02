'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

interface UseScrollControlledAnimationOptions {
  sentences: string[]
  animationDelay: number
  onAnimationComplete?: () => void
}

export const useScrollControlledAnimation = ({
  sentences,
  animationDelay = 200,
  onAnimationComplete,
}: UseScrollControlledAnimationOptions) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleSentences, setVisibleSentences] = useState<number>(0)
  const isAnchorScrolling = useRef<boolean>(false)
  const hasTriggered = useRef<boolean>(false)

  // Detect anchor link clicks to allow them to pass through
  useEffect(() => {
    const handleHashChange = () => {
      isAnchorScrolling.current = true
      setTimeout(() => {
        isAnchorScrolling.current = false
      }, 1000)
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      if (link) {
        isAnchorScrolling.current = true
        setTimeout(() => {
          isAnchorScrolling.current = false
        }, 1000)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  // Intersection Observer to detect when section first enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (entry.isIntersecting && !hasTriggered.current && !isAnchorScrolling.current) {
          hasTriggered.current = true

          // Calculate the scroll position needed to align section bottom with viewport bottom
          const rect = entry.boundingClientRect
          const viewportHeight = window.innerHeight
          const currentScrollY = window.scrollY
          const sectionBottom = currentScrollY + rect.bottom
          const targetScrollY = sectionBottom - viewportHeight

          // Smooth scroll to perfect position
          window.scrollTo({
            top: targetScrollY,
            behavior: 'smooth',
          })

          // Start animation after scroll completes
          setTimeout(() => {
            animateSentences()
          }, 800) // Wait for smooth scroll to complete
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '0px 0px -20% 0px', // Trigger when section is approaching bottom of viewport
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Animate sentences function
  const animateSentences = useCallback(() => {
    const animateNextSentence = (index: number) => {
      if (index >= sentences.length) {
        onAnimationComplete?.()
        return
      }

      setTimeout(
        () => {
          setVisibleSentences(index + 1)
          animateNextSentence(index + 1)
        },
        index === 0 ? 0 : animationDelay,
      )
    }

    animateNextSentence(0)
  }, [sentences.length, animationDelay, onAnimationComplete])

  // If animation has been triggered, keep all sentences visible
  useEffect(() => {
    if (hasTriggered.current) {
      setVisibleSentences(sentences.length)
    }
  }, [sentences.length])

  return {
    sectionRef,
    visibleSentences,
  }
}
