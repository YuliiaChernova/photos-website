import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ContentContainer = styled.div`
  display: flex;

  >div {
    p {
      margin-right: 38px;
      margin-top: 0;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.tablets} {
		flex-wrap: wrap;
    >div {
      padding: 0 85px 0 85px;
      >p {
        margin-right: 0;
      }
    }
	}
`;

export const ImageContainer = styled.div`
  margin-right: 38px;
  margin-left: 12%;

  @media ${({ theme }) => theme.mediaQueries.tablets} {
		width: 100%;

    display: flex;
    justify-content: center;
    margin: 0 0 30px 0;
	}
`;

export const StyledImage = styled(GatsbyImage)`
  width: 227px;
`

