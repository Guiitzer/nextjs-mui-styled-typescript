import {  ReactElement } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const theme = createTheme({
    palette:{
      common:{
         black:"#000000",
         white:"#fff"
      },
      background:{
         paper:"rgba(255, 255, 255, 1)",
         default:"#fafafa"
      },
      primary:{
         light:"#ffa7e5",
         main:"#7149AD",
         dark:"#572e8a",
         contrastText:"#fff"
      },
      secondary:{
         light:"#c1fff5",
         main:"#79ffe9",
         dark:"#00ff4c",
         contrastText:"#000000"
      },
      error:{
         light:"#e57373",
         main:"#f44336",
         dark:"#d32f2f",
         contrastText:"#fff"
      },
      text:{
         primary:"rgba(0, 0, 0, 0.87)",
         secondary:"#afafaf",
         disabled:"rgba(119, 119, 119, 0.38)",
      }
   }
  },
);

const AppTheme = ({ children }: any): ReactElement => (
   <ThemeProvider theme={theme}>
      {children}
   </ThemeProvider>
);

export default AppTheme;
