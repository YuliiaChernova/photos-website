import * as React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import {
  StyledHeader,
  TextContainer,
  NavPanel
} from './style';
import { MainContainer } from '../theme/global-styles';

const Header = () => (
  <StyledHeader>
    <MainContainer>
      <TextContainer>
        <h2>
          Author's name
        </h2>
        <h1>
          Photography
        </h1>
      </TextContainer>
      <NavPanel>
        <NavLinks />
      </NavPanel>
    </MainContainer>
  </StyledHeader>
);

export default Header;