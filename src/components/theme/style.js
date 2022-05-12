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
  }
`;

export const SliderContainer = styled.div`
  max-width: ${({ fullScreenMode }) => fullScreenMode ? '100vw': '820px'};
  position: ${({ fullScreenMode }) => fullScreenMode ? 'absolute': 'relative'};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ fullScreenMode, theme }) => fullScreenMode ? theme.colors.fullScreenBackground : 'none'};
  margin: 0 auto;
  .slick-prev:before {
    color: ${({ theme }) => theme.colors.icon}
  }
  .slick-next:before {
    color: ${({ theme }) => theme.colors.icon}
  }
  .slick-slide {
    max-height: ${({ fullScreenMode }) => fullScreenMode ? 'calc(100vh - 50px)': '600px'};
    width: auto;
    z-index: 998;
  }
 
  .slick-slide img {
    max-height: ${({ fullScreenMode }) => fullScreenMode ? 'calc(100vh - 50px)': '600px'};
    width: auto;
    margin: 0 auto;
  }

  .slick-active.slick-current {
    z-index: 999;
  }

  .full-screen-arrow-container {
    display: flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.colors.icon};
    >span {
      padding: 5px 5px 0 0;
    }
    >span:hover, span:active {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.iconActive}
    }
  }
  @media ${({ theme }) => theme.mediaQueries.tablets} {
		max-width: ${({ fullScreenMode }) => fullScreenMode ? '100vw': '700px'};

    .slick-slide {
      max-height: 500px;
    }
   
    .slick-slide img {
      max-height: 500px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.phones} {
    max-width: ${({ fullScreenMode }) => fullScreenMode ? '100vw': 'calc(100vw - 60px)'};

    .slick-slide {
      max-height: none;
    }
   
    .slick-slide img {
      max-height: none;
    }
  }
 }
`;

export const DesktopAlbum = styled.div`
  display: block;
  img {
    width: 410px !important;
    height: auto;
  }

  @media ${({ theme }) => theme.mediaQueries.tablets} {
		img {
      width: 350px !important;
      height: auto;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.phones} {
		display: none;
  }
`;

export const MobileAlbum = styled.div`
  display: none;

  @media ${({ theme }) => theme.mediaQueries.phones} {
		display: block;

    div {
      margin-bottom: 30px;
    }
  }
`;