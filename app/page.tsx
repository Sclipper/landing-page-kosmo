import Header from './components/Header'
import MainPage from './components/MainPage'

export default function Home() {
  return (
    <div
      className="px-4 py-4 bg-violet-100 flex flex-col gap-5"
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
