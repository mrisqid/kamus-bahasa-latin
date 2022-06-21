import React from 'react';
import reactDom from 'react-dom';

import { ThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';

import App from './App';

reactDom.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
