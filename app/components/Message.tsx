'use client'

import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useSearchParams, useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'

function Message() {
  const params = useSearchParams()
  const router = useRouter()
  useEffect(() => {
    const message = params.get('message')
    if (message === 'success') {
      toast.success('Успешно записване!', { autoClose: 1500 })
      router.push('/')
    }
    if (message === 'fail') {
      toast.error('Грешка при записване. Опитайте отново.', { autoClose: 1500 })
      router.push('/')
    }
  }, [params, router])

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export default Message
