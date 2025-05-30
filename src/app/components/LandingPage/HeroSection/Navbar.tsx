import React from 'react'

export default function Navbar() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#features', label: 'Features', id: 'features' },
    { href: '#roadmap', label: 'Roadmap', id: 'roadmap' },
    { href: '#team', label: 'Team', id: 'team' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className='relative z-50 w-full bg-transparent' role='navigation' aria-label='Main navigation'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8'>
        {/* Desktop Navigation */}
        <ul className='hidden items-center space-x-8 md:flex' role='list'>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className='relative text-sm font-medium text-white transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-300 after:transition-all after:duration-200 hover:text-blue-300 hover:after:w-full focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none'
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
