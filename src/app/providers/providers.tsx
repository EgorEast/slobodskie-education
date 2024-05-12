'use client'

import { Theme } from './theme-provider'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Theme>{children}</Theme>
)
