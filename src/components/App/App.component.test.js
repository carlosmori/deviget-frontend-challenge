import React from 'react';
import { App } from '../App/App.component';
import { shallow } from 'enzyme';

describe('App component test suite', () => {
  test('Should render App component', () => {
    const wrapper = shallow(<App />);
    const mainTitle = wrapper.find('h1');
    expect(mainTitle.text()).toBe('Reddit Top Posts');
  });
});
