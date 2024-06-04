'use client'

import * as React from 'react'
import Header from '../components/Header'

function ContactPage() {
  return (
    <div
      className="px-4 py-4 bg-violet-100 flex flex-col gap-5 shadow-lg"
      style={{
        maxWidth: '1920px',
        margin: '0 auto',
      }}
    >
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">Контакт</h1>

          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Телефон:</span> +359 879 27 06 91
            </li>
            <li>
              <span className="font-semibold">Имейл:</span> tsbatinov@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
