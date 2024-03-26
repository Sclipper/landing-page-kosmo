import Image from 'next/image'

function BannerSm() {
  return (
    <div className="relative mb-32">
      <Image
        src="/dozzer_panorama_small.svg"
        alt="bulldozer"
        width={5000}
        height={1000}
      />
      <div
        style={{
          width: '65%',
          height: '16.4rem',
          position: 'absolute',
          top: '60%',
          right: '17.4%',
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
          width: '20%',
          height: '20%',
          position: 'absolute',
          top: '85%',
          right: '40%',
        }}
        className="flex justify-center items-center"
      >
        <Image
          className="cursor-pointer"
          src="/token_button_arrow.svg"
          alt="arrow"
          width={900}
          height={200}
        />
      </div>
    </div>
  )
}
export default BannerSm
