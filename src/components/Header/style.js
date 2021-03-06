import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TextContainer = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    font-size: ${({ theme }) => theme.textSizes.authorName.size};
    line-height: ${({ theme }) => theme.textSizes.authorName.lineHeight};
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 30px;
  }
  h1 {
    font-family: Intro, Sans-serif;
    font-size: ${({ theme }) => theme.textSizes.header.size};
    line-height: ${({ theme }) => theme.textSizes.header.lineHeight};
    text-transform: uppercase;
    margin-top: 15px;
  }
`;

export const NavPanel = styled.nav`
  width: 100%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 40px;

  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    list-style: none;
    margin-left: 50px;
    margin-right: 50px;
  }

   a {
    transition: .4s;
    color: ${({ theme }) => theme.colors.icon};
   }

   a:hover, a.active {
    color: ${({ theme }) => theme.colors.iconActive};
  }
`;