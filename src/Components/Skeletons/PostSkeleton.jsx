import React from 'react';
import * as S from './Style/Skeletons.style';
import Skeleton from '@mui/material/Skeleton';
import PropTypes from 'prop-types';

const PostSkeleton = ({ count }) => {
  Array.from({ length: 2 });

  return (
    Array.from({ length: count }).map((_, i) => (
      <S.PostSkeleton key={i}>
        <div className="header">
          <Skeleton animation="wave" variant="circular" width={60} height={60} />
          <div className="user">
            <Skeleton animation="wave" variant="rounded" width={350} height={15} />
            <Skeleton animation="wave" variant="rounded" width={250} height={15} />
          </div>
        </div>
        <div className="body">
          <Skeleton animation="wave" variant="rounded" width="100%" height={15} />
          <Skeleton animation="wave" variant="rounded" width="75%" height={15} />
          <Skeleton animation="wave" variant="rounded" width="100%" height={250} />
        </div>
        <div className="footer">
          <div className="footer__buttons">
            <Skeleton animation="wave" width={60} height={30} />
            <Skeleton animation="wave" width={60} height={30} />
          </div>
          <div>
            <Skeleton animation="wave" width={60} height={30} />
          </div>
        </div>
      </S.PostSkeleton>
    ))
  );
};

export default PostSkeleton;

PostSkeleton.propTypes = {
  count: PropTypes.number
};

PostSkeleton.defaultProps = {
  count: 1
};