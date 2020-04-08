import React, { useCallback } from 'react';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const { id } = post;
  return <div className={styles.postCardContainer}>Post! {id}</div>;
};
Post.propTypes = {};
export default Post;
