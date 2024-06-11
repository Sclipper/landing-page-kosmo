import Link from 'next/link'

function EarlyAccessButton({ color = 'teal' }) {
  return (
    <Link className="text-white" href="/form" locale="bg">
      <button
        type="button"
        className={`bg-${color}-800 hover:bg-${color}-900 px-4 py-2 rounded-lg`}
      >
        Получете ранен достъп
      </button>
    </Link>
  )
}

export default EarlyAccessButton
