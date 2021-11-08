/* eslint-disable no-unused-vars */
 import 'styled-components'
 import { type } from 'os'
import globaltheme from './globaltheme'

 export type Theme = typeof globaltheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
