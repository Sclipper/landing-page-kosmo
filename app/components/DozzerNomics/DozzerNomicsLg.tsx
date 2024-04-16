import Image from 'next/image'

const getPositionTop = (index: number) => {
  const positions = [
    'calc(7% - 1vh)',
    'calc(7% - 1vh)',
    'calc(85% - 1vh)',
    'calc(85% - 1vh)',
  ]
  return positions[index]
}
const getPositionLeft = (index: number) => {
  const positions = ['1%', '73%', '1%', '73%']
  return positions[index]
}

function DozzerNomicsLg({
  tokenomicValues,
  totalSupply,
}: {
  tokenomicValues: Object
  totalSupply: string
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center">
        <p className="text-header text-dozzer-orange font-bold">DOZZER</p>
        <p className="text-header font-bold">NOMICS</p>
      </div>
      <div className="flex gap-1 justify-center">
        <p className="text-2xl text-dozzer-orange font-semibold">{totalSupply}</p>
        <p className="text-2xl font-semibold">Total Supply</p>
      </div>

      <div className="relative">
        <Image
          src="/dozzer_with_lines.svg"
          alt="bulldozer"
          width={400000}
          height={400000}
        />

        {Object.entries(tokenomicValues).map(([key, value], i) => (
          <div
            key={key}
            className="flex flex-col items-start gap-1"
            style={{
              position: 'absolute',
              top: getPositionTop(i),
              left: getPositionLeft(i),
            }}
          >
            <div className="flex gap-1">
              <p className="text-xl font-semibold text-dozzer-orange">
                {value.percentage}
              </p>
              <p className="text-xl font-semibold">{value.label}</p>
            </div>
            <p className="text-sm w-72">{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DozzerNomicsLg
