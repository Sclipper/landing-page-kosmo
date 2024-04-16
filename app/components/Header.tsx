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
          <p className="text-header text-dozzer-orange  font-bold">(Bull)</p>
          <p className="text-header font-bold">DOZZER</p>
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

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-75">
          <div className="fixed inset-0 flex flex-col py-1 px-4 bg-gray-800">
            <div className="flex justify-between align-middle items-center mt-3">
              <div className="flex gap-1 cursor-pointer">
                <p className="text-header text-dozzer-orange  font-bold">(Bull)</p>
                <p className="text-header font-bold">DOZZER</p>
              </div>
              <button type="button" onClick={() => setIsOpen(false)}>
                <Image
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer"
                  src="/menu.svg"
                  alt="menu"
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <div className="mb-4">
              <Image src="/line.svg" alt="line" width={5000} height={1000} />
            </div>
            <div className="flex-grow">
              <Sections setIsOpen={setIsOpen} orientation="col" items="center" />
            </div>
            <div className="flex items-center justify-center">
              <SocialMedia />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
