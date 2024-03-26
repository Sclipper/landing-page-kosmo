import Image from 'next/image'
import Link from 'next/link'

function SocialMedia() {
  return (
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
  )
}

export default SocialMedia
