import { useEffect } from 'react'

export const RegisterServiceWorker: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  return <>{children}</>
}
