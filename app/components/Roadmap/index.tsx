import RoadmapLg from './RoadmapLg'
import RoadmapSm from './RoadmapSm'

function Roadmap() {
  const roadmap = [
    {
      phase: '01',
      points: ['Launch website', 'Launch social media', 'Launch whitepaper'],
    },
    {
      phase: '02',
      points: ['Launch token', 'Launch tokenomics', 'Launch roadmap'],
    },
    {
      phase: '03',
      points: ['Launch partnerships', 'Launch marketing', 'Launch NFTs'],
    },
  ]
  return (
    <div>
      <p className="text-header text-center lg:text-left font-bold">ROADMAP</p>
      <div className="hidden lg:block relative p-16 h-80">
        <RoadmapLg roadmap={roadmap} />
      </div>
      <div className="flex lg:hidden flex-col gap-24 pt-10">
        <RoadmapSm roadmap={roadmap} />
      </div>
    </div>
  )
}

export default Roadmap
