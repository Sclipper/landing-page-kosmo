import Image from 'next/image'
import Link from 'next/link'
import EarlyAccessButton from './Ui/EarlyAccessButton'

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Image
        src="/logo.png"
        alt="Dozzer Logo"
        width={55}
        height={20}
        className="rounded-full"
      />
      <div className="flex">
        <button type="button" className="px-4 py-2 rounded-lg">
          <Link href="/team" locale="bg">
            Отбор
          </Link>
        </button>
        <EarlyAccessButton />
      </div>
    </div>
  )
}

export default Header
