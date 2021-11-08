import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: 16px;
      font-family: 'Roboto', sans-serif;

      @media (max-width: 768px) {
        font-size: 12px
      }
      @media (max-width: 1024px) {
        font-size: 14px
      }
    }
`;

