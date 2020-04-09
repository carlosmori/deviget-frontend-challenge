import React, { useState, useEffect, useCallback } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import styles from './PostDetail.module.scss';
import { closePostDetail } from '../../redux/ducks/posts/reducers';
import PropTypes from 'prop-types';

export const PostDetail = ({ currentPost, showPostDetail, closePostDetail, currentChunk }) => {
  const [show, setShow] = useState(showPostDetail);
  const { id, thumbnailUrl, author, hours, title, commentsCount } = currentPost;

  useEffect(() => {
    setShow(showPostDetail);
  }, [showPostDetail]);

  const handleClose = useCallback(() => {
    closePostDetail({ postId: id, currentChunk });
  }, [id, closePostDetail, currentChunk]);

  return (
    <Modal show={show} onHide={handleClose} animation={true} centered>
      <Modal.Header closeButton>
        <div className={styles.author}>
          <div className={styles.bold}>
            {author} {hours}
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <Modal.Title className={styles.title}>{title}</Modal.Title>
        <img className={styles.image} src={thumbnailUrl} alt="" />
        <div className={styles.comments}>{commentsCount} Comments</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
const mapStateToProps = (state) => ({
  currentPost: state.post.currentPost,
  showPostDetail: state.post.openPostDetail,
  currentChunk: state.post.currentChunk,
});
PostDetail.propTypes = {
  currentPost: PropTypes.object,
  showPostDetail: PropTypes.bool,
  closePostDetail: PropTypes.func,
  currentChunk: PropTypes.number,
};

export default connect(mapStateToProps, { closePostDetail })(PostDetail);
