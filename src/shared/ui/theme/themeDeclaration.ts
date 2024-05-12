import 'styled-components'
import { type baseTheme } from './baseTheme'
import { type Theme } from './theme'

declare module 'styled-components' {
  type ThemeT = typeof baseTheme

  export interface DefaultTheme extends ThemeT {
    type: Theme
  }
}
