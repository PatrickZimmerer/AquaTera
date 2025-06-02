export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
  e.preventDefault()
  if (!targetId) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
