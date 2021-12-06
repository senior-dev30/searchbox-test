import { createTheme, Theme } from '@mui/material';
import { DefaultTheme } from 'styled-components';
import { Colors, PaletteColors } from './styled';
import Poppin from '../assets/fonts/Poppins-Regular.ttf';

const palleteColors: PaletteColors = {
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  primary: {
    light: '#3A8DDE',
    main: '#1C3E55',
    dark: '#1C3E55',
  },
  secondary: {
    light: '#3A8DDE',
    main: '#1C3E55',
    dark: '#1C3E55',
  },
  success: {
    light: '#3A8DDE',
    main: '#1C3E55',
    dark: '#1C3E55',
  },
  info: {
    light: '#3A8DDE',
    main: '#1C3E55',
    dark: '#1C3E55',
  },
  error: {
    light: '#3A8DDE',
    main: '#1C3E55',
    dark: '#1C3E55',
  },
  text: {
    disabled: '#3A8DDE',
    primary: '#09182C',
    secondary: '#1C3E55',
  },
  warning: {
    light: '#3A8DDE',
    main: '#1C3E55',
    dark: '#1C3E55',
  },
};

export const colors: Colors & PaletteColors = {
  brandPrimary: '#1C3E55',
  brandSecondary: '#3A8DDE',
  white: '#FFFFFF',
  black: '#000000',
  blue: {
    main: '#15A5E5',
    light: '#8DE1FF',
    dark: '#074059',
    blue10: '#EBF9FF',
  },
  red: {
    main: '#EB1648',
    red10: '#FFD9E2',
  },
  orange: {
    main: '#FFB800',
    orange10: '#FFF5DA',
  },
  green: {
    main: '#14A800',
  },
  grey: {
    main: '#6D7380',
    light: '#F5F9FF',
    dark: '#09182C',
    border: '#DEE1EB',
    gray80: '#5E6774',
  },
  ...palleteColors,
};

export const MatCustomTheme = createTheme({
  type: 'light',
  colors: colors,
  fonts: {
    primary:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
    baseSize: '14px',
  },
  palette: palleteColors,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Poppins',
          src: `local("Poppins"), url(${Poppin}) format("truetype")`,
        },
        body: {
          fontFamily:
            '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
        },
      },
    },
  },
});

export const LightTheme: DefaultTheme & Theme = {
  type: 'light',
  colors: colors,
  fonts: {
    primary:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
    baseSize: '14px',
  },
  ...MatCustomTheme,
};
