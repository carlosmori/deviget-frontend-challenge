import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './PostList.module.scss';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { dismissAllPosts } from '../../redux/ducks/posts/reducers';
import Post from '../Post/Post.component.jsx';

export const PostList = ({ posts, dismissAllPosts }) => {
  const handleDismissRefresh = useCallback(() => {
    dismissAllPosts();
  }, [dismissAllPosts]);

  return (
    <Fragment>
      <div className={styles.buttonContainer}>
        <Button onClick={handleDismissRefresh} variant="danger">
          Dismiss All
        </Button>
      </div>
      <div className={styles.postListContainer}>
        {posts.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  posts: state.post.postList,
});

PostList.propTypes = {
  posts: PropTypes.array,
  dismissAllPosts: PropTypes.func,
};

export default connect(mapStateToProps, { dismissAllPosts })(PostList);
