import Header from './components/Header'
import Intro from './components/Intro'
import Message from './components/Message'

export default function Home() {
  return (
    <div className="lg:px-20 px-0 py-8" style={{ maxWidth: '1920px', margin: '0 auto' }}>
      <div className="border border-white flex flex-col gap-16">
        <Header />
        <Intro />
        <Message />
      </div>
    </div>
  )
}
