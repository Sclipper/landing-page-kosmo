import Header from './components/Header'
import MainPage from './components/MainPage'

export default function Home() {
  return (
    <div
      className="px-4 py-4 bg-violet-100 flex flex-col gap-5 shadow-lg"
      style={{
        maxWidth: '1920px',
        margin: '0 auto',
        height: '100vh',
      }}
    >
      <Header />
      <MainPage />
    </div>
  )
}
