import { type DefaultTheme } from 'styled-components'
import { baseTheme } from './baseTheme'

export enum Theme {
  light = 'light',
  dark = 'dark',
}

// DefaultTheme - используется для динамических тем
export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: Theme.light,

  colors: {
    ...baseTheme.colors,
    bg: '#E5E4E8',
    font: '#19191B',
  },
}

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: Theme.dark,

  colors: {
    ...baseTheme.colors,
    bg: '#19191B',
    font: '#E5E4E8',
  },
}
