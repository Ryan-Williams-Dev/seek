import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3A7091',
    },
    secondary: {
      main: '#917349',
      contrastText: '#fffffe',
    },
    background: {
      default: '#eff0f3',
      paper: '#fffffe',
    },
    text: {
      primary: '#0d0d0d',
      secondary: '#2a2a2a',
    },
    divider: '#010101',
    success: {
      main: '#85BCDE',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
});

export default Theme;
