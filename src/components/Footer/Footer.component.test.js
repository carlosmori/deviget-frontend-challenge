import React from 'react';
import { Footer } from './Footer.component';
import { shallow } from 'enzyme';

describe('App component test suite', () => {
  test('Should render Footer component and return "developed" ', () => {
    const wrapper = shallow(<Footer />);
    const footerDescription = wrapper.find('.developedBy').childAt(0).text();
    expect(footerDescription).toBe('Developed');
  });
});
