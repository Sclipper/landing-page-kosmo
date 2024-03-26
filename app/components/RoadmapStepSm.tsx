import Image from 'next/image'

type BuyStepProps = {
  phase: {
    phase: string
    points: string[]
  }
}

function PhaseStepSm({ phase }: BuyStepProps) {
  const phaseNo = phase.phase
  return (
    <div
      className="flex rounded-md flex-row justify-between md:p-4 md:gap-0 gap-4"
      style={{
        backgroundColor: '#171B29',
        border: '1px solid #29314A',
      }}
    >
      <div className=" relative px-3 flex flex-col gap-2 py-4">
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
      </div>
      <Image
        src={`/dozzer_phase_${phaseNo}.svg`}
        width={100}
        height={100}
        alt={phaseNo}
      />
    </div>
  )
}

export default PhaseStepSm
