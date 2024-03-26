import Image from 'next/image'
import SocialMedia from '../general/SocialMedia'
import Sections from '../general/Sections'

function FooterLg() {
  return (
    <div className="flex flex-col gap-7">
      <Image src="/line.svg" alt="line" width={5000} height={1000} />
      <div className="flex justify-between items-center">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <p className="text-3xl font-bold text-dozzer-orange">(Bull)</p>
            <p className="text-3xl font-bold uppercase">Dozzer</p>
          </div>
          <p className="text-sm text-regular">
            Copyright 2024 DOZZER Token. All Rights Reserved.
          </p>
        </div>

        {/* Mid */}
        <Sections />
        {/* Right */}
        <SocialMedia />
      </div>
    </div>
  )
}

export default FooterLg
