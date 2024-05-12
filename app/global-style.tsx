'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
  }

  body {
    height: 100dvh;
    max-height: 100dvh;
  }
`
