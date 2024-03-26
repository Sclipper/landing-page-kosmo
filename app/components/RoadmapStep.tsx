import Image from 'next/image'

type BuyStepProps = {
  phase: {
    phase: string
    points: string[]
  }
}

function PhaseStep({ phase }: BuyStepProps) {
  const phaseNo = phase.phase
  return (
    <div
      className="rounded-md relative py-3 px-3"
      style={{
        backgroundColor: '#171B29',
        border: '1px solid #29314A',
        width: '20vw',
      }}
    >
      <div className="flex gap-1">
        <p className="text-lg font-semibold">Phase</p>
        <p className="text-lg font-semibold text-dozzer-orange">{phase.phase}</p>
      </div>
      <ul className="list-disc ml-7 flex flex-col gap-2">
        {phase.points.map((point) => (
          <li key={point} className="text-xs font-regular">
            {point}
          </li>
        ))}
      </ul>
      <div
        style={{
          position: 'absolute',
          right: '-8%',
          bottom: '16%',
          width: '34%',
          maxWidth: '120px',
          minWidth: '85px',
        }}
      >
        <Image
          src={`/dozzer_phase_${phaseNo}.svg`}
          width={10000000}
          height={100000000}
          alt={phaseNo}
        />
      </div>
    </div>
  )
}

export default PhaseStep
