import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './theme';
import GlobalStyle from './global-style';

const App: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          {children}
        </StylesProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
