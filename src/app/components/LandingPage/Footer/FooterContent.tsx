import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FooterContent() {
  return (
    <div className='z-10 flex flex-col justify-between gap-y-8'>
      <p
        data-aos='fade-down'
        className='text-start text-xl leading-[100%] font-medium tracking-[-0.025rem] uppercase md:text-[2.375rem] lg:ml-18 lg:tracking-[-0.0375rem]'
      >
        Beyond <br />
        Blockspace
      </p>

      <p
        data-aos='fade-down'
        className='max-w-xs text-[1.75rem] leading-[90%] tracking-[-0.035rem] uppercase md:text-[2rem] lg:ml-18 lg:max-w-6xl lg:text-[3.375rem] lg:leading-[100%] lg:tracking-[-0.0675rem]'
      >
        Fusion is forming. <br />
        If you believe tokens should deliver real-world outcomes, you&apos;re already one of us.
      </p>

      <Link
        data-aos='fade-down'
        className='text-primary z-[100] flex h-12 w-fit items-center justify-center rounded-full bg-white px-6 py-2 text-lg leading-[110%] tracking-[-0.03rem] uppercase transition-transform duration-200 hover:scale-[1.02] hover:shadow-md md:text-sm lg:ml-18'
        href='/pdfs/fusion-litepaper.pdf'
        target='_blank'
        rel='noopener noreferrer'
      >
        Read the Litepaper
      </Link>

      <div className='flex items-center gap-x-8 md:pt-72 lg:mx-18'>
        <Link
          data-aos='fade-in'
          data-aos-delay='100'
          href='#'
          scroll={true}
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <Image src='/assets/logos/fusion-logo.svg' alt='Fusion logo' width={31} height={29} />
        </Link>

        <Link
          data-aos='fade-in'
          data-aos-delay='400'
          href='https://x.com/AvaxFusion'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image
            className='transition-transform duration-200 hover:scale-110 hover:shadow-md'
            src='/assets/logos/twitter-logo.svg'
            alt='Twitter logo'
            width={31}
            height={31}
          />
        </Link>

        <Link
          data-aos='fade-in'
          data-aos-delay='700'
          href='https://medium.com/@AvaxFusion'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image
            className='transition-transform duration-300 hover:scale-110 hover:shadow-md'
            src='/assets/logos/medium-logo.svg'
            alt='Medium logo'
            width={31}
            height={31}
          />
        </Link>
      </div>
    </div>
  )
}
