import { createTheme } from '@mui/material/styles';

// Breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

// Colors
const color = {
  navy: '#000080',
};

// Palettes
const palette = {
  white: {
    main: '#fff',
  },
};

const theme = {
  breakpoints,
  color,
  palette,
};

export default createTheme(theme);
