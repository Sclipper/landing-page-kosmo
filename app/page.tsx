import { colorTheme } from './colors'
import Header from './components/Header'
import MainPage from './components/MainPage'

export default function Home() {
  return (
    <div
      className={`px-4 py-4 bg-${colorTheme}-100 flex flex-col gap-5 shadow-lg min-h-screen`}
      style={{
        maxWidth: '1920px',
        margin: '0 auto',
      }}
    >
      <Header />
      <MainPage />
    </div>
  )
}
