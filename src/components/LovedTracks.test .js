import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import LovedTracks from './LovedTracks';

const lovedTracks = [];

describe('<LovedTracks> component', () => {
  const wrapper = shallow(<LovedTracks lovedTracks={lovedTracks} />);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
