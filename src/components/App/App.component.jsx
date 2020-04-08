import React from 'react';
import PostList from '../PostList/PostList.component';
import withLayout from '../../hocs/withLayout.component';
const App = () => (
  <div>
    <h1>Reddit Top Posts</h1>
    <PostList />
  </div>
);

export default withLayout(App);
