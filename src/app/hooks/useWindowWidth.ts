import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    // Use passive event listener for better performance
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isAboveWidth = (width: number) => windowWidth >= width
  const isBelowWidth = (width: number) => windowWidth <= width

  const isMobile = !isAboveWidth(768)
  const isTablet = !isAboveWidth(1024)
  const isDesktop = isAboveWidth(1024)

  return { windowWidth, isAboveWidth, isBelowWidth, isMobile, isTablet, isDesktop }
}

export default useWindowWidth
