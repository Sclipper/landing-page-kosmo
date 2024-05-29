import Link from 'next/link'

function EarlyAccessButton() {
  return (
    <button type="button" className="bg-violet-900 px-4 py-2 rounded-lg">
      <Link className="text-white" href="/form" locale="bg">
        Получете ранен достъп
      </Link>
    </button>
  )
}

export default EarlyAccessButton
