'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  :root {
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono',
    'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono',
    'Courier New', monospace;

  --foreground: #000000;
  --background-start: #d6dbdc;
  --background-end: #ffffff;

  --primary-glow: conic-gradient(
    from 180deg at 50% 50%,
    #16abff33 0deg,
    #0885ff33 55deg,
    #54d6ff33 120deg,
    #0071ff33 160deg,
    transparent 360deg
  );
  --secondary-glow: radial-gradient(#ffffff, #ffffff00);
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground: #ffffff;
    --background-start: #000000;
    --background-end: #000000;

    --primary-glow: radial-gradient(#0141ff66, #0141ff00);
    --secondary-glow: linear-gradient(to bottom right, #0141ff00, #0141ff00, #0141ff4d);
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  height: 100vh;
  max-height: 100vh;
  color: var(--foreground);
  background: linear-gradient(to bottom, transparent, var(--background-end)) var(--background-start);
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}

`
