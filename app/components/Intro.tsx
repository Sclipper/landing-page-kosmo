import Image from 'next/image'

function Intro() {
  return (
    <div className="bg-custom-orange text-white flex flex-col gap-16">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-5xl font-bold uppercase">Bull + Dozzer</p>
          <div className="flex items-center mt-2">
            <p className="text-5xl font-bold">=</p>
            <p className="text-5xl font-bold text-dozzer-orange ml-3">BULLDOZER TOKEN</p>
          </div>
        </div>
        <p className="text-md font-normal">
          Bulldozer (DOZER) - token smashing through the crypto world. With a dedicated
          community and unstoppable momentum, Bulldozer leaves other memes in the dust.
          Join the revolution with Bulldozer leading the way!
        </p>
      </div>
      <div className="relative">
        <Image src="/dozzer_panorama.svg" alt="bulldozer" width={5000} height={1000} />
        <div
          style={{
            // border: '1px solid white',
            width: '20%',
            height: '16.4rem',
            position: 'absolute',
            top: '-10%',
            right: '16.4%',
          }}
        >
          <Image
            className="animate-slow-spin cursor-pointer"
            src="/buy_token_button.svg"
            alt="bulldozer"
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </div>
  )
}

export default Intro
