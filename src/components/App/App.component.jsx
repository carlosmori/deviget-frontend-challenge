import React from 'react';
import PostList from '../PostList/PostList.component';
import withLayout from '../../hocs/withLayout.component';
import styles from './App.module.scss';

const App = () => (
  <div className="container">
    <h1 className={styles.appMainTitle}>Reddit Top Posts</h1>
    <PostList />
  </div>
);

export default withLayout(App);
