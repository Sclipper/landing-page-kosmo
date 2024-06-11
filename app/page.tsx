import { colorTheme } from './colors'
import Header from './components/Header'
import MainPage from './components/MainPage'

export default function Home() {
  return (
    <div className="flex flex-col section-1">
      <div className="px-4 py-2 bg-teal-300 flex items-center flex-col gap-5">
        <Header />
      </div>
      <div
        className={`px-4 bg-${colorTheme}-100 flex flex-col gap-5 shadow-lg`}
        style={{
          maxWidth: '1920px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <MainPage />
      </div>
    </div>
  )
}
