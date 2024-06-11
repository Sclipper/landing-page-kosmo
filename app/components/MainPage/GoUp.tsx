'use client'

import { MdExpandMore } from 'react-icons/md'

function GoUp() {
  const scrollDown = () => {
    // scroll to item with class name section-2
    const element = document.querySelector('.section-1')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <button onClick={scrollDown} type="button">
      Обратно горе
      <MdExpandMore
        style={{
          transform: 'rotate(180deg)',
          width: '3rem',
          height: 'auto',
          margin: '0 auto',
        }}
      />
    </button>
  )
}

export default GoUp
