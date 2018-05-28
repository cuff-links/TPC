import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('<App />', () => {
  it('should contain one p element', () => {
    const div = React.createElement('div')
    const wrapper = shallow(<App />)
    expect(wrapper.find('ul').children().length).toBe(3);
  })
})