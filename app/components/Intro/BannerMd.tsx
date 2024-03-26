import Image from 'next/image'

function BannerMd() {
  return (
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
  )
}
export default BannerMd
