import * as React from 'react'
import PhaseStepSm from '../RoadmapStepSm'

type RoadmapLgProps = {
  roadmap: { phase: string; points: string[] }[]
}

function RoadmapSm({ roadmap }: RoadmapLgProps) {
  return (
    <>
      {roadmap.map((phase) => (
        <div key={phase.phase}>
          <PhaseStepSm phase={phase} />
        </div>
      ))}
    </>
  )
}

export default RoadmapSm
