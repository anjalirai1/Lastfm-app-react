import React from 'react';
import styled from 'styled-components';
import lastfm_placeholder from '../assets/cover-album-placeholder.svg';
import colorVariables from '../constants/styles-variables';
import PropTypes from 'prop-types';

const {
  darkGrey
} = colorVariables;

const LovedTrackLink = styled.a`
  display:block;
  margin-bottom: 2.5rem;

  &:link,
  &:visited {
    color: ${darkGrey};
    background-color: rgba(255, 255, 255, 1);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
    transition: background-color .25s ease-in-out;
  }

  @media screen and (min-width:1024px) {
    display: inline-flex;
  }
`;

const LovedTrackImage = styled.img`
  min-width: 300px;
  min-height: 300px;
`;

const LovedTrackInfo = styled.ul`
  padding: .75rem 1rem;
  width: 300px;
  line-height: 1.5;
`;
const LovedTrackDate = styled.li`
  font-size: 80%;
`;

class LovedTrack extends React.Component {

  render() {
    const {
      lovedTrack
    } = this.props;

    const {
      artist,
      album,
      date,
      image,
      name,
      url
    } = lovedTrack;

    const imageApiResponse = image['3']['#text'];

    let dateElement;
    if (date) {
      dateElement = (
        <LovedTrackDate>{date['#text']}</LovedTrackDate>
      );
    }
    let imageSource;
    if (imageApiResponse.length !== 0) {
      imageSource = (imageApiResponse);
    } else {
      imageSource = (lastfm_placeholder);
    }

    return (
      <LovedTrackLink
        href={url}>
        <LovedTrackImage
          src={imageSource}
          alt={name} />
        <LovedTrackInfo>
          <li><strong>{artist['#text']}</strong></li>
          <li>{name}</li>
          <li><em>{album['#text']}</em></li>
          {dateElement}
        </LovedTrackInfo>
      </LovedTrackLink>
    );
  }
}

LovedTrack.propTypes = {
  lovedTrack: PropTypes.object.isRequired
};

export default LovedTrack;
