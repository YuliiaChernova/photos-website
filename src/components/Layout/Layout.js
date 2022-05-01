import * as React from 'react';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/global-styles';
import Header from '../Header';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <main>{ children }</main>
    <GlobalStyle />
  </ThemeProvider>
);

export default Layout;