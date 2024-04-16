import Image from 'next/image'

type BuyStepProps = {
  step: {
    number: string
    icon: string
    header: string
    description: string
  }
}

function BuyStep({ step }: BuyStepProps) {
  return (
    <div
      className="rounded-md md:mx-16 lg:mx-0 relative w-full p-10 flex flex-col items-center gap-2 text-center"
      style={{
        backgroundColor: '#171B29',
        border: '1px solid #29314A',
        height: '263px',
      }}
    >
      <p
        style={{
          position: 'absolute',
          left: '4%',
          top: '4%',
        }}
        className="text-lg font-semibold text-dozzer-yellow"
      >
        {step.number}
      </p>
      <Image src={step.icon} width={50} height={50} alt={step.header} />
      <p className="text-subheader font-semibold">{step.header}</p>
      <p className="text-bodytext font-regular">{step.description}</p>
    </div>
  )
}

export default BuyStep
