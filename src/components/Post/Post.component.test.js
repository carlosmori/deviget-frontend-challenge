import React from 'react';
import { Post } from './Post.component';
import { shallow } from 'enzyme';

describe('App component test suite', () => {
  let wrapper, button, postCardContainer, openPostDetail, dismissPost;
  const post = {
    id: 1,
    thumbnailUrl: '',
    author: '',
    hours: '',
    title: '',
    commentsCount: '',
    readStatus: true,
  };
  beforeEach(() => {
    openPostDetail = jest.fn();
    dismissPost = jest.fn();
    wrapper = shallow(
      <Post post={post} dismissPost={dismissPost} openPostDetail={openPostDetail} />
    );
    button = wrapper.find('Button');
  });
  test('Should render Button inside Post component and return "Dismiss All" ', () => {
    expect(button.text()).toBe('Dismiss');
  });
  test('Should stop propagation and not call openPostDetail', () => {
    button.simulate('click', { stopPropagation: () => {} });
    expect(openPostDetail).toHaveBeenCalledTimes(0);
  });
  test('Should call dismissPost', () => {
    postCardContainer = wrapper.find('.postCardContainer');
    postCardContainer.simulate('click', { stopPropagation: () => {} });
    expect(openPostDetail).toHaveBeenCalledTimes(1);
  });
});
