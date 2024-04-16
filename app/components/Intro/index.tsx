import BannerMd from './BannerMd'
import BannerSm from './BannerSm'

function Intro() {
  return (
    <div className="bg-custom-orange text-white flex flex-col gap-4 md:gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left ">
        <div>
          <h1 className="text-header font-bold uppercase">Bull + Dozzer</h1>
          <div className="flex gap-2 items-center mt-2">
            <h1 className="text-header font-bold">=</h1>
            <p className="text-header font-bold text-dozzer-orange">BULLDOZER TOKEN</p>
          </div>
        </div>
        <p className="text-bodytext md:text-md lg:text-lg">
          Bulldozer (DOZER) - token smashing through the crypto world. With a dedicated
          community and unstoppable momentum, Bulldozer leaves other memes in the dust.
          Join the revolution with Bulldozer leading the way!
        </p>
      </div>
      <div className="hidden md:block">
        <BannerMd />
      </div>
      <div className="block md:hidden">
        <BannerSm />
      </div>
    </div>
  )
}

export default Intro
