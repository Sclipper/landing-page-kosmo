import Image from 'next/image'

function DozzerNomicsSm({
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
        <p className="text-subheader text-dozzer-orange font-semibold">{totalSupply}</p>
        <p className="text-subheader font-semibold">Total Supply</p>
      </div>

      <div>
        <div className="mx-40">
          <Image
            src="/dozzer_without_lines.svg"
            alt="bulldozer"
            width={400000}
            height={400000}
          />
        </div>
        <div className="flex gap-4 flex-wrap justify-between">
          {Object.entries(tokenomicValues).map(([key, value], i) => (
            <div key={key} className="flex flex-col items-start gap-1">
              <div className="flex gap-1">
                <p className="text-subheader font-semibold text-dozzer-orange">
                  {value.percentage}
                </p>
                <p className="text-subheader font-semibold">{value.label}</p>
              </div>
              <p className="text-bodytext md:w-72">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DozzerNomicsSm
