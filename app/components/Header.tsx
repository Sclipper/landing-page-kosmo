import Image from 'next/image'
import Link from 'next/link'
import EarlyAccessButton from './Ui/EarlyAccessButton'

function Header() {
  return (
    <div
      style={{
        maxWidth: '1920px',
        width: '100%',
      }}
      className="flex justify-between items-center"
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Kosmo labs Logo"
          width={55}
          height={20}
          className="rounded-full"
        />
      </Link>
      <div className="flex">
        <button type="button" className="px-4 py-2 rounded-lg">
          {/* <Link href="/team" locale="bg">
            Отбор
          </Link> */}
        </button>
        <EarlyAccessButton />
      </div>
    </div>
  )
}

export default Header
