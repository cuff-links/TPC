import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './feed';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('<Feed />', () => {
  it('should contain one p element', () => {
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('ul').children().length).toBe(3);
  })
})