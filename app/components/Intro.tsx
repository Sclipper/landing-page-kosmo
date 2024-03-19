import Image from 'next/image'

function Intro() {
  return (
    <div className="bg-custom-orange text-white flex flex-col gap-4 md:gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:text-left text-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
            Bull + Dozzer
          </h1>
          <div className="md:flex md:gap-3 items-center mt-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">=</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-dozzer-orange">
              BULLDOZER TOKEN
            </p>
          </div>
        </div>
        <p className="text-sm md:text-md lg:text-lg">
          Bulldozer (DOZER) - token smashing through the crypto world. With a dedicated
          community and unstoppable momentum, Bulldozer leaves other memes in the dust.
          Join the revolution with Bulldozer leading the way!
        </p>
      </div>
      <div className="relative">
        <Image src="/dozzer_panorama.svg" alt="bulldozer" width={5000} height={1000} />
        <div
          style={{
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
        <div
          style={{
            width: '6%',
            height: '20%',
            position: 'absolute',
            top: '13%',
            right: '23.5%',
          }}
          className="flex justify-center items-center"
        >
          <Image
            className="cursor-pointer"
            src="/token_button_arrow.svg"
            alt="arrow"
            width={800}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}

export default Intro
