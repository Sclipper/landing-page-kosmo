// import Image from 'next/image'

// type BuyStepProps = {
//   phase: {
//     phase: string
//     points: string[]
//   }
// }

// function PhaseStepSm({ phase }: BuyStepProps) {
//   const phaseNo = phase.phase
//   return (
//     <div
//       className="relative flex rounded-md flex-col justify-between items-start md:p-4 md:gap-0 gap-4"
//       style={{
//         backgroundColor: '#171B29',
//         border: '1px solid #29314A',
//       }}
//     >
//       <div className="px-3 flex flex-col gap-2 py-4">
//         <div className="flex gap-1">
//           <p className="text-header font-semibold">Phase</p>
//           <p className="text-header font-semibold text-dozzer-orange">{phase.phase}</p>
//         </div>
//         <ul className="list-disc ml-7 flex flex-col gap-2">
//           {phase.points.map((point) => (
//             <li key={point} className="text-bodytext font-light">
//               {point}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Image
//         src={`/dozzer_phase_${phaseNo}.svg`}
//         width={100}
//         height={100}
//         alt={phaseNo}
//       />
//     </div>
//   )
// }

// export default PhaseStepSm

import Image from 'next/image'

type BuyStepProps = {
  phase: {
    phase: string
    points: string[]
  }
}

function PhaseStepSm({ phase }: BuyStepProps) {
  return (
    <div className="relative">
      <div
        className="rounded-xl overflow-hidden flex flex-col justify-between"
        style={{
          backgroundColor: '#171B29',
          border: '1px solid #29314A',
        }}
      >
        <div className="px-4 py-4">
          <div className="flex gap-4 items-center">
            <p className="text-header font-semibold">Phase</p>
            <p className="text-header font-semibold text-dozzer-orange">{phase.phase}</p>
          </div>
          <ul className="list-disc pl-5 mt-4">
            {phase.points.map((point) => (
              <li key={point} className="text-bodytext font-light text-white">
                {point}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="w-1/2">
        <Image
          src={`/dozzer_phase_${phase.phase}.svg`}
          layout="responsive"
          width={100}
          height={40}
          objectFit="cover"
          alt={`Phase ${phase.phase}`}
        />
      </div> */}
        <div className="w-1/2">
          {/* Image positioned absolutely */}
          <Image
            style={{ visibility: 'hidden' }}
            src={`/dozzer_phase_${phase.phase}.svg`}
            layout="fixed"
            width={150} // Double the container's height to have half of it coming out
            height={50} // Double the container's height to have half of it coming out
            objectFit="cover"
            alt={`Phase ${phase.phase}`}
          />
        </div>
        {/* Image positioned absolutely */}
      </div>
      <Image
        style={{
          position: 'absolute',
          top: '60%',
          left: 'calc(50% - 100px)',
        }}
        src={`/dozzer_phase_${phase.phase}.svg`}
        layout="fixed"
        width={200} // Double the container's height to have half of it coming out
        height={80} // Double the container's height to have half of it coming out
        objectFit="cover"
        alt={`Phase ${phase.phase}`}
      />
    </div>
  )
}

export default PhaseStepSm
