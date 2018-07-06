import React from 'react';
import styled from 'styled-components';
import LovedTrack from './LovedTrack.js';
import _map from 'lodash/map';
import _isEqual from 'lodash/isEqual';
import {
  fetchLovedTracks
} from '../actions/action-creators';
import PropTypes from 'prop-types';

const LovedTrackWrapper = styled.section`
  width: 30rem;
  margin: 0 auto;
  padding: 10rem 0 0 0;

  @media screen and (min-width:1024px) {
    width: 60rem;
  }
`;

class LovedTracks extends React.Component {

  shouldComponentUpdate(nextProps){
    return !_isEqual(nextProps.lovedTracks,this.props.lovedTracks);
  }

  componentWillMount() {
    fetchLovedTracks();
    // this.updateInterval = setInterval(() => fetchLovedTracks(2), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  render() {

    const {
      lovedTracks
    } = this.props;

    const LovedTrackElement = _map(lovedTracks, (lovedTrack, i) => (
      <LovedTrack
        key={i}
        lovedTrack={lovedTrack} />
    ));

    return (
    <LovedTrackWrapper>
      {LovedTrackElement}
    </LovedTrackWrapper>
    );
  }
}

LovedTracks.propTypes = {
  lovedTracks: PropTypes.array
};

export default LovedTracks;
