import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useAOS = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleLoad = () => AOS.refresh()

    AOS.init({ offset: 80, delay: 0, duration: 600, easing: 'ease' })
    window.addEventListener('load', handleLoad)

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    let scrollRef = 0
    const handleScroll = () => {
      if (scrollRef <= 2) {
        scrollRef++
      } else {
        AOS.refresh()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

export default useAOS
