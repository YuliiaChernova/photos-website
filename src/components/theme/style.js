import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 385px;
  margin: 0 auto;

  h2 {
    font-size: ${({ theme }) => theme.textSizes.subHeader.size};
    line-height: ${({ theme }) => theme.textSizes.subHeader.lineHeight};
    font-weight: 400;
    margin: 0 0 30px 0;
  }

  @media ${({ theme }) => theme.mediaQueries.tablets} {
		text-align: center;
`;