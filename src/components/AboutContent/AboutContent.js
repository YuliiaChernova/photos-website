import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { MainContainer } from '../theme/global-styles';
import {
  HeaderContainer,
  ContentContainer,
  ImageContainer
} from './style';

const about = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, dapibus dolor sit
  aliquet purus velit arcu magna nisl. Id posuere rutrum posuere suscipit tristique
  ullamcorper integer nulla. Nulla id lacus, duis nec nunc metus eget varius. Semper
  vulputate morbi tempus dis mi tempus tincidunt. Amet fringilla id leo porttitor cras
  bibendum placerat. Cras feugiat amet placerat risus placerat integer urna eu et. Volutpat
  odio ante eget volutpat volutpat. Tincidunt sodales elementum hendrerit consequat in urna
  porttitor ultrices eu. Vel sed donec morbi integer fermentum.
`;

const AboutContent = () => (
  <section>
    <MainContainer>
      <HeaderContainer>
        <h2>About</h2>
      </HeaderContainer>
      <ContentContainer>
        <ImageContainer>
          <StaticImage
            src='../../images/placeholder-avatar.jpg'
            alt='Photographer avatar'
            placeholder='blurred'
            layout='fixed'
            width={227}
            height={306}
          />
        </ImageContainer>
        <p>
          {about}
        </p>
      </ContentContainer>
    </MainContainer>
  </section>
);

export default AboutContent;