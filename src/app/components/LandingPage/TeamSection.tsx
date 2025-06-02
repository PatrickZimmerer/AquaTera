import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { TEAM_MEMBERS } from '../../data/team'

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const BG_IMAGE_WIDTH = 2381
  const BG_IMAGE_HEIGHT = 1060

  useEffect(() => {
    const currentSection = sectionRef.current

    if (!currentSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(currentSection)

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id='team' className='bg-primary-dark relative h-dvh w-full overflow-hidden'>
      <div className='side-padding relative flex h-full flex-col justify-center'>
        <div className='md:gap mx-auto flex w-full flex-col items-center gap-y-12'>
          <h3
            data-aos='fade-in'
            className='z-20 text-[1.625rem] leading-[100%] tracking-[-0.04875rem] md:text-[2.5rem] md:tracking-[-0.075rem] 2xl:text-[3.5rem]'
          >
            Our team
          </h3>

          <ul className='z-20 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
            {TEAM_MEMBERS.map((member) => (
              <li
                key={member.name + member.desctiption}
                className='flex flex-col items-center justify-center gap-y-6 text-center'
              >
                <div className='relative size-[165px] overflow-hidden rounded-full'>
                  <Image
                    className='object-cover object-center'
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    sizes='165px'
                  />
                </div>

                <div className='flex flex-col gap-y-4'>
                  <h4 className='text-xl leading-[100%] tracking-[-0.0375rem]'>{member.name}</h4>

                  <p className='font-dmSans max-w-60 text-sm leading-[120%]'>{member.desctiption}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Background Image */}
        <Image
          src='/assets/images/background/brown-road.svg'
          alt='Brown Road'
          width={BG_IMAGE_WIDTH}
          height={BG_IMAGE_HEIGHT}
          className='absolute z-0 max-w-none object-cover md:hidden'
          style={{
            top: '45%',
            left: BG_IMAGE_WIDTH * -0.1 + 'px',
          }}
        />

        {/* Mobile Overlay */}
        <div
          className='bg-primary-dark absolute z-10 md:hidden'
          style={{
            top: '45%',
            left: BG_IMAGE_WIDTH * -0.1 + 'px',
            width: BG_IMAGE_WIDTH + 'px',
            height: BG_IMAGE_HEIGHT + 'px',
            transform: isVisible ? 'translateX(100%)' : 'translateX(0%)',
            transition: 'transform 6s ease-in-out',
          }}
        />
      </div>

      {/* Desktop Background Image */}
      <Image
        src='/assets/images/background/brown-road.svg'
        alt='Brown Road'
        width={BG_IMAGE_WIDTH}
        height={BG_IMAGE_HEIGHT}
        className='absolute top-[10%] left-0 z-0 hidden w-screen max-w-none object-cover md:block'
      />

      {/* Desktop Overlay */}
      <div
        className='bg-primary-dark absolute top-[10%] left-0 z-10 hidden h-dvh w-screen md:block'
        style={{
          transform: isVisible ? 'translateX(100%)' : 'translateX(0%)',
          transition: 'transform 6s ease-in-out',
        }}
      />
    </section>
  )
}
