import Image from 'next/image'
import React from 'react'
import BuyStep from './BuyStep'

function HowToBuy() {
  const steps = [
    {
      number: '01',
      icon: '/step1.svg',
      header: 'Install wallet',
      description: 'Install Phantom on your phone or computer.',
    },
    {
      type: 'arrow',
      number: '',
      icon: '/right_arrow.svg',
      header: '',
      description: '',
    },
    {
      number: '02',
      icon: '/step2.svg',
      header: 'Buy or bridge Solana',
      description: 'Buy Solana from the wallet with cash or bridge from an exchange.',
    },
    {
      type: 'arrow',
      number: '',
      icon: '/right_arrow.svg',
      header: '',
      description: '',
    },
    {
      number: '03',
      icon: '/step3.svg',
      header: 'Swap for $DOZZER',
      description: 'Use Jupiter or Raydium to swap Solana for $DOZZER.',
    },
  ]

  return (
    <div className="flex flex-col gap-10 justify-center py-8">
      <div className="flex flex-col gap-5 items-center">
        <p className="text-2xl"> How to buy</p>
        <p className="text-5xl font-bold text-dozzer-orange">$DOZZER</p>
      </div>
      <div className="flex justify-center gap-10 lg:flex-row flex-col">
        {steps.map((step) => (
          <React.Fragment key={step.number}>
            {step.type !== 'arrow' ? (
              <div
                className="flex items-center justify-center flex-grow-0 md:basis-0 lg:basis-96"
                // style={{ flexBasis: '362px' }}
                key={step.number}
              >
                <BuyStep step={step} />
              </div>
            ) : (
              <div
                className="items-center justify-center flex-grow hidden lg:flex lg:rotate-0"
                key={step.number}
              >
                <Image src={step.icon} alt="right arrow" width={80} height={80} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default HowToBuy
