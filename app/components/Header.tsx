'use client'

import { useState } from 'react'
import Image from 'next/image'
import Sections from './general/Sections'
import SocialMedia from './general/SocialMedia'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-1 cursor-pointer">
          <p className="text-2xl  text-dozzer-orange  font-bold">(Bull)</p>
          <p className="text-2xl font-bold">DOZZER</p>
        </div>
        {/* Mid */}
        <div className="hidden md:flex">
          <Sections />
        </div>
        {/* Right */}
        <div className="hidden md:flex">
          <SocialMedia />
        </div>

        <div className="block md:hidden">
          <Image
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </div>
      </div>
      {/* Menu Panel */}
      {isOpen ?? (
        <div
          className={`fixed right-0 top-0 bottom-0 w-3/4 bg-black text-white z-20 transform transition-all duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            boxShadow: '-5px 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="flex flex-col items-start justify-between min-h-full p-4">
            <Sections />
            <SocialMedia />
          </div>
        </div>
      )}
    </>
  )
}

export default Header
