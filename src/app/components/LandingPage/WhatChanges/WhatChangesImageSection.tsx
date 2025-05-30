import Image from 'next/image'
import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useWindowWidthContext } from '../../../providers/WindowWidthProvider'

export default function WhatChangesImageSection() {
  const { isMobile } = useWindowWidthContext()

  const traditionalBlockchainEcosystemImageWidth = isMobile ? 323 : 1105
  const traditionalBlockchainEcosystemImageHeight = isMobile ? 233 : 380
  const fusionFrameworkEcosystemImageWidth = isMobile ? 323 : 1105
  const fusionFrameworkEcosystemImageHeight = isMobile ? 331 : 486

  return (
    <div className='z-10 grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 lg:max-w-[85%]'>
      <Parallax speed={isMobile ? 5 : 10}>
        <Image
          className='max-md:mx-auto'
          src='/assets/images/traditional-blockchain-ecosystem.svg'
          alt='Traditional Blockchain Ecosystem'
          width={traditionalBlockchainEcosystemImageWidth}
          height={traditionalBlockchainEcosystemImageHeight}
        />
      </Parallax>
      <Parallax speed={isMobile ? 15 : 20}>
        <Image
          className='max-md:mx-auto'
          src='/assets/images/fusion-framework-ecosystem.svg'
          alt='Fusion Framework Ecosystem'
          width={fusionFrameworkEcosystemImageWidth}
          height={fusionFrameworkEcosystemImageHeight}
        />
      </Parallax>
    </div>
  )
}
