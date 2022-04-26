import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1e2124',
    },
    secondary: {
      main: '#abdfec',
      contrastText: '#fffffe',
    },
    background: {
      default: '#eff0f3',
      paper: '#abdfec',
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
    fontFamily: "'Bungee','Roboto'",
    TextField: {
      fontFamily: 'Roboto'
    }
  },
  shape: {
    borderRadius: 7,
  }, 
});
const DarkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#7f5af0',
    },
    secondary: {
      main: '#2cb67d',
      contrastText: '#fffffe',
    },
    background: {
      default: '#242629',
      paper: '#16161a',
    },
    text: {
      primary: '#fffffe',
      secondary: '#94a1b2',
    },
    success: {
      main: '#2cb67d',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
});

export { Theme, DarkTheme }
