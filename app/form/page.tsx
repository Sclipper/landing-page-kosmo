/* eslint-disable jsx-a11y/label-has-associated-control */
import Header from '../components/Header'

function FormPage() {
  return (
    <div
      className="px-4 py-4 bg-violet-100 flex flex-col gap-5"
      style={{
        maxWidth: '1920px',
        margin: '0 auto',
      }}
    >
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">Получете Достъп</h1>
          <form>
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
                required
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
                type="url"
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
                type="submit"
                className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Изпрати
              </button>
            </div>
          </form>
        </div>
      </div>
      )
    </div>
  )
}

export default FormPage
