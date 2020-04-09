import React from 'react';
import { Header } from './Header.component';
import { shallow } from 'enzyme';

describe('App component test suite', () => {
  test('Should render Header component', () => {
    const wrapper = shallow(<Header />);
    const mainTitle = wrapper.find('h1');
    expect(mainTitle.text()).toBe('Ring Frontend Test');
  });
});
