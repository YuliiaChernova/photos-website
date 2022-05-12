import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { SliderContainer } from '../components/theme/style';

import { AiOutlineArrowsAlt } from '@react-icons/all-files/ai/AiOutlineArrowsAlt';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export const settings = {
  infinite: true,
  arrows: true,
  dots: false,
  fade: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SamplePrevArrow />,
};

const AlbumTemplate = ({ data }) => {

  const [fullScreenMode, setFullScreenMode] = useState(false);

  const onFullScreenHandler = () => setFullScreenMode(
    (prevState) => !prevState
  );

  const getSettings = (fullScreen, settings) => fullScreen ? {...settings, arrows: false, dots: true} : settings;

  const photos = data.allWpMediaItem.edges;
  const photoItems = photos.map(({ node }) => (
    <GatsbyImage image={getImage(node.localFile)} alt={node.id} />
  ));

  return (
    <Layout>
      <SliderContainer fullScreenMode={fullScreenMode}>
        <Slider {...getSettings(fullScreenMode, settings)} className='overflow-hidden'>
          {photoItems}
        </Slider>
        <div className='full-screen-arrow-container'>
          <span onClick={onFullScreenHandler}>
            <AiOutlineArrowsAlt />
          </span>
        </div>
      </SliderContainer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($caption: String!) {
    allWpMediaItem(filter: {caption: {eq: $caption}}) {
      edges {
        node {
          localFile {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
          }
        }
      }
    }
  }
`;

export default AlbumTemplate;