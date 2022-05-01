import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    overflow-x: hidden;
    font-family: Cormorant, Sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: .62px;
    margin: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.contentMaxWidth};
  margin: 0 auto;
`;