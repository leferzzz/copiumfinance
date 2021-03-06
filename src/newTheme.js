//Your theme for the new stuff using material UI has been copied here so it doesn't conflict
import { createMuiTheme } from '@material-ui/core/styles';

const newTheme = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: '#FFF',
    },
    background: {
      default: '#121212',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    primary: {
      light: '#ff7961',
      main: '#F95B3D',
      dark: '#e05136',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#F95B3D',
      dark: '#e05136',
      contrastText: '#000',
    },
    action: {
      disabledBackground: '#CDCDCD',
      active: '#000',
      hover: '#000',
    },
  },
  typography: {
    color: '#2c2560',
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
});

export default newTheme;
