import React from 'react'
import { handleSmoothScroll } from '../../utility/utils'

export default function Navbar() {
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
    <nav className='sticky top-0 z-50 w-full pt-8' role='navigation' aria-label='Main navigation'>
      <ul
        data-aos='fade-down'
        data-aos-duration='800'
        className='hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 md:flex'
        role='list'
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              className='text-primary hover-primary-link leading-[110%]focus:ring-2 focus:ring-secondary relative text-sm focus:ring-offset-2 2xl:text-base'
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
