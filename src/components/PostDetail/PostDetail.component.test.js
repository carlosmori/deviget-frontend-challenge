import React from 'react';
import { PostDetail } from './PostDetail.component';
import { shallow } from 'enzyme';

describe('App component test suite', () => {
  let wrapper, closeButton, openPostDetail, closePostDetail;
  const post = {
    id: 1,
    thumbnailUrl: '',
    author: '',
    hours: '',
    title: 'Test Post',
    commentsCount: '',
    readStatus: true,
  };
  beforeEach(() => {
    openPostDetail = jest.fn();
    closePostDetail = jest.fn();
    wrapper = shallow(
      <PostDetail
        currentPost={post}
        closePostDetail={closePostDetail}
        openPostDetail={openPostDetail}
      />
    );
  });
  test('Should "title" as a Post Title ', () => {
    const title = wrapper.find('.title');
    expect(title.text()).toBe('Test Post');
  });
  test('Should stop propagation and not call closePostDetail and not to call openPostDetail ', () => {
    closeButton = wrapper.find('Button');
    closeButton.simulate('click');
    expect(closePostDetail).toHaveBeenCalledTimes(1);
  });
});
