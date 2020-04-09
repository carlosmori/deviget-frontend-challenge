import React, { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Post.module.scss';
import { connect } from 'react-redux';
import { dismissPost, openPostDetail } from '../../redux/ducks/posts/reducers';
import PropTypes from 'prop-types';

export const Post = ({ post, chunk, dismissPost, openPostDetail }) => {
  const { id, thumbnailUrl, author, hours, title, commentsCount, readStatus } = post;
  const [fade, setFade] = useState(false);

  const handleDismissPost = useCallback(
    (event) => {
      event.stopPropagation();
      setFade(true);
      setTimeout(() => {
        dismissPost({ postId: id, chunk });
      }, 500);
    },
    [dismissPost, id, chunk]
  );

  const handleOpenPost = useCallback(() => {
    openPostDetail({ postId: id, chunk });
  }, [openPostDetail, id, chunk]);

  return (
    <div
      className={`${styles.postCardContainer} ${fade ? styles.fade : ''}`}
      onClick={handleOpenPost}
    >
      <div className={styles.postHeader}>
        <div className={styles.postAuthorBold}>
          <span>{author}</span> {hours}
        </div>
        <img variant="top" src={thumbnailUrl} height="200" alt="image not avaliable" />
      </div>
      <div className={styles.postCardbody}>
        <div
          style={{
            color: readStatus ? 'purple' : 'inherit',
            fontStyle: readStatus ? 'oblique' : 'inherit',
          }}
          className={styles.postCardbodyTitle}
        >
          {title}
        </div>{' '}
        <div className={styles.postCardBodyFooter}>
          <div className={styles.comments}>{commentsCount} Comments</div>
          <Button className={styles.dismissButton} onClick={handleDismissPost} variant="danger">
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
  dismissPost: PropTypes.func,
  openPostDetail: PropTypes.func,
  chunk: PropTypes.number,
};
export default connect(null, { dismissPost, openPostDetail })(Post);
