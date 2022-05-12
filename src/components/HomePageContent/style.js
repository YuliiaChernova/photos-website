import styled from 'styled-components';

export const AlbumCoverContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 820px;

  @media ${({ theme }) => theme.mediaQueries.tablets} {
		max-width: calc(100vh - 60px);
  }

  @media ${({ theme }) => theme.mediaQueries.phones} {
		max-width: 410px;
    margin: 0 auto;
  }
`;

export const AlbumCoverName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.albumLine};
  >p {
    font-size: ${({ theme }) => theme.textSizes.albumName.size};
    line-height: font-size: ${({ theme }) => theme.textSizes.albumName.lineHeight};
    color: ${({ theme }) => theme.colors.albumName};
    text-align: center;
    margin: 10px 0 10px 0;
  }

  @media ${({ theme }) => theme.mediaQueries.phones} {
		max-width: 410px;
  }
`;