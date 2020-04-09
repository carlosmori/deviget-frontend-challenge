/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { PostList } from './PostList.component';
import { shallow } from 'enzyme';

describe('App component test suite', () => {
  let wrapper, button, dismissAllPosts;

  beforeEach(() => {
    dismissAllPosts = jest.fn();
    wrapper = shallow(<PostList dismissAllPosts={dismissAllPosts} posts={[]} />);
    button = wrapper.find('Button');
  });
  test('Should render Button inside PostList component and return "Dismiss All" ', () => {
    expect(button.text()).toBe('Dismiss All');
  });
  test('Should render Button inside PostList component and return "Dismiss All" ', () => {
    button.simulate('click');
    expect(dismissAllPosts).toHaveBeenCalledTimes(1);
  });
});
