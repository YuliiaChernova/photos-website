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
`;

export const ContentContainer = styled.div`
  display: flex;

  >p {
    margin-right: 38px;
    margin-top: 0;
  }
`;

export const ImageContainer = styled.div`
  margin-right: 38px;
  margin-left: 12%;
`

