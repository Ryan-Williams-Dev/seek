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

export { Theme }
