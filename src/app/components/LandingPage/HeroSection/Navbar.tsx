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
    { href: '#about', label: 'About Aquatera', id: 'about' },
    { href: '#products', label: 'Products & Services', id: 'products' },
    { href: '#research', label: 'Research', id: 'research' },
    { href: '#sustainability', label: 'Sustainability', id: 'sustainability' },
    { href: '#wellness', label: 'Wellness', id: 'wellness' },
    { href: '#team', label: 'Our team', id: 'team' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className='relative z-50 w-full pt-8' role='navigation' aria-label='Main navigation'>
      <div className='mx-auto flex max-w-5xl items-center justify-between'>
        <ul className='hidden items-center space-x-8 md:flex' role='list'>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className='text-primary hover-primary-link leading-[110%]focus:ring-2 focus:ring-secondary relative text-sm focus:ring-offset-2'
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
