import * as React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { useAboutData } from '../../hooks/useAboutData';
import { MainContainer } from '../theme/global-styles';
import {
  ContentContainer,
  ImageContainer,
  StyledImage
} from './style';
import { HeaderContainer } from '../theme/style';

const AboutContent = () => {

  const data = useAboutData();
  const {
    aboutPageDesription,
    aboutPageHeader,
    aboutPagePhoto
  } = data.allWpPage.edges[0].node.aboutPageAcf;
  const imageData = getImage(aboutPagePhoto.localFile);

  return (
    <section>
      <MainContainer>
        <HeaderContainer>
          <h2>{aboutPageHeader}</h2>
        </HeaderContainer>
        <ContentContainer>
          <ImageContainer>
            <StyledImage image={imageData} alt="photographer" />
          </ImageContainer>
          <div className="about-text-container">
            <p>
              {aboutPageDesription}
            </p>
          </div>
        </ContentContainer>
      </MainContainer>
    </section>
  );
}

export default AboutContent;