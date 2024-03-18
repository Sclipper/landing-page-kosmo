import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex gap-1 cursor-pointer">
        <p className="text-2xl  text-dozzer-orange  font-bold">(Bull)</p>
        <p className="text-2xl font-bold">DOZZER</p>
      </div>
      {/* Menu items */}

      <div className="flex gap-4">
        <p className="text-md cursor-pointer">What is DOZZER?</p>
        <p className="text-md cursor-pointer">Hot To Buy?</p>
        <p className="text-md cursor-pointer">Tokenomics</p>
        <p className="text-md cursor-pointer">Roadmap</p>
        <p className="text-md cursor-pointer">Airdrop</p>
      </div>

      {/* Social media */}
      <div className="flex gap-2 items-center">
        <p className="text-md">Join us on</p>
        <Link href="google.com">
          <Image
            width={8}
            height={8}
            src="/twitter_icon.svg"
            alt="twitter"
            className="w-8 h-8"
          />
        </Link>
        <Link href="google.com">
          <Image
            width={8}
            height={8}
            src="/discord_icon.svg"
            alt="discord"
            className="w-8 h-8"
          />
        </Link>
        <Link href="google.com">
          <Image
            width={8}
            height={8}
            src="/telegram_icon.svg"
            alt="telegram"
            className="w-8 h-8"
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
