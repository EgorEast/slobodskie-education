'use client'

import { useEffect } from 'react'
import MainPage from 'pages/main-page'

const Home = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator)
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('scope is: ', registration.scope)
        // Зарегать пуши
        // registration.pushManager.subscribe({
        //   userVisibleOnly: true,
        //   applicationServerKey,
        // });
      })
  }, [])

  return <MainPage />
}

export default Home
