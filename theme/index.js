import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#FFFFFF',
      100: '#F6F8F7',
      200: '#F5F1EB',
      300: '#00000029',
      400: '#E3E3E3',
      500: '#707070',
    },
    secondary: {
      50: '#B6CAC1',
      100: '#B0C2BA',
      200: '#009548',
      300: '#0F4E5D',
      400: '#244D5A',
      500: '#254D59',
    },

    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
