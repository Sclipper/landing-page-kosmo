import * as React from 'react'
import Image from 'next/image'
import RoadmapStep from '../RoadmapStep'

type RoadmapLgProps = {
  roadmap: { phase: string; points: string[] }[]
}

function getTopPosition(i: number) {
  const positions = ['-15%', '40%', '40%']
  return positions[i]
}
function getLeftPosition(i: number) {
  const positions = ['35%', '9%', '66%']
  return positions[i]
}

function RoadmapLg({ roadmap }: RoadmapLgProps) {
  return (
    <>
      <Image src="/lines.svg" width={500000} height={500000} alt="lines" />
      {roadmap.map((phase, i) => (
        <div
          style={{
            position: 'absolute',
            top: getTopPosition(i),
            left: getLeftPosition(i),
          }}
          key={phase.phase}
        >
          <RoadmapStep phase={phase} />
        </div>
      ))}
    </>
  )
}

export default RoadmapLg
