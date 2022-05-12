import * as React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { MainContainer } from '../theme/global-styles';
import { useAlbumsNames } from '../../hooks/useAlbumsNames';
import { useAlbumsCovers } from '../../hooks/useAlbumsCovers';
import { extractText, createPath } from '../../utils';
import { settings } from '../../settings';

import {
  AlbumCoverContainer,
  AlbumCoverName
} from './style';
import { SliderContainer, DesktopAlbum, MobileAlbum } from '../theme/style';

const createDesktopCovers = (photos, albums, number) => {
  return albums.reduce((acc, item) => (
    {
      ...acc,
      [item.title]: photos.filter(({ node }) => (
        node.caption && extractText(node.caption) === item.title
      )).slice(0, number)

    }
  ), {});
};

const createMobileCovers = (photos, albums) => {
  return albums.reduce((acc, item) => (
    {
      ...acc,
      [item.title]: [photos.find(({ node }) => (
        node.caption && extractText(node.caption) === item.title
      ))]

    }
  ), {});
};

const HomePageContent = () => {

  const data = useAlbumsNames();
  const coversData = useAlbumsCovers();
  const albums = data.allWpPost.edges.map(item => item.node);

  const desktopCoversData = createDesktopCovers(coversData.allWpMediaItem.edges, albums, 4);
  const mobileCoversData = createMobileCovers(coversData.allWpMediaItem.edges, albums);

  console.log('desktopCoversData', desktopCoversData);
  const onClickHandler = (e) => {
    e.stopPropagation();
    console.log('onClickHandler key', e);
  };

  const createCovers = (obj) => {
    return Object.keys(obj).map((key) => (
      <Link to={createPath(key)}>
        <AlbumCoverContainer>
          {obj[key].map(({ node }) => (
            <GatsbyImage image={getImage(node.localFile)} alt={key} />
          ))}
          <AlbumCoverName>
            <p>
              {key}
            </p>
          </AlbumCoverName>
        </AlbumCoverContainer>
      </Link>
    ))
  };

  return (
    <section>
      <MainContainer>
        {
          <SliderContainer>
            <DesktopAlbum onClick={onClickHandler}>
              <Slider {...settings} className='overflow-hidden'>
                {createCovers(desktopCoversData)}
              </Slider>
            </DesktopAlbum>
            <MobileAlbum>
              {createCovers(mobileCoversData)}
            </MobileAlbum>
          </SliderContainer>
        }
      </MainContainer>
    </section>
  );
}

export default HomePageContent;