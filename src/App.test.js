import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './layout/navbar'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('<App />', () => {
  it('should contain one div element with class App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').hasClass('App')).toEqual(true);
  })

  it('should contain one div which has one child navbar', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div').children).toHaveLength(1);
    expect(wrapper.find(Navbar)).toHaveLength(1)
  })
})