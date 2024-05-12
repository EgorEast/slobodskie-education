'use client'

import { RegisterServiceWorker } from './register-service-worker-provider'
import { Theme } from './theme-provider'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <RegisterServiceWorker>
    <Theme>{children}</Theme>
  </RegisterServiceWorker>
)
