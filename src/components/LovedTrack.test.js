import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import LovedTrack from './LovedTrack';

const lovedTrack = {
  'name': 'b name',
  'image': [
    {'#text' : 'album'},
    {'#text' : 'album'},
    {'#text' : 'album'},
    {'#text' : 'album'}
  ],
  'artist': ['#text'],
  'album': ['#text'],
  'date': ['#test']
};

describe('<LovedTrack /> componemts', () => {
  const wrapper = shallow(<LovedTrack lovedTrack={lovedTrack}/>);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
