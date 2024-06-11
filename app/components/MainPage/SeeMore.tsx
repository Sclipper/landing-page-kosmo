'use client'

import { MdExpandMore } from 'react-icons/md'

function SeeMore() {
  const scrollDown = () => {
    // scroll to item with class name section-2
    const element = document.querySelector('.section-2')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <button onClick={scrollDown} type="button">
      Вижте повече
      <MdExpandMore style={{ width: '3rem', height: 'auto', margin: '0 auto' }} />
    </button>
  )
}

export default SeeMore
