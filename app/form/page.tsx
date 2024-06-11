'use client'

import * as React from 'react'
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import { colorTheme } from '../colors'

function FormPage() {
  const router = useRouter()
  // In your form component, add a submit handler

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = {
      email: event.target.email.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      jobTitle: event.target.jobTitle.value,
      companyWebsite: event.target.companyWebsite.value,
      companySize: event.target.companySize.value,
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const res = await response.json()
      if (response.ok) {
        router.push('/?message=success')
      } else {
        throw new Error(res.message || 'Failed to subscribe')
      }
    } catch (error) {
      router.push('/?message=failed')

      console.log('error', error)
      // setMessage(error.message)
    }
  }

  return (
    <div
      className={`px-4 py-4 bg-${colorTheme}-100 flex flex-col gap-5 shadow-lg`}
      style={{
        maxWidth: '1920px',
        margin: '0 auto',
      }}
    >
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">Получете Достъп</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Име*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Фамилия
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Имейл*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Длъжност
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="companyWebsite"
                className="block text-sm font-medium text-gray-700"
              >
                Уебсайт на компанията
              </label>
              <input
                type="text"
                id="companyWebsite"
                name="companyWebsite"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="companySize"
                className="block text-sm font-medium text-gray-700"
              >
                Размер на компанията
              </label>
              <select
                id="companySize"
                name="companySize"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Изберете...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501+">501+</option>
              </select>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onSubmit={(e) => handleSubmit(e)}
                type="submit"
                className={`px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-${colorTheme}-800 hover:bg-${colorTheme}-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                Изпрати
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormPage
