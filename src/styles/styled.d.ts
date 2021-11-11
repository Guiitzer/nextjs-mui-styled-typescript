
import 'styled-components'
import globaltheme from './globaltheme'

 export type Theme = typeof globaltheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
