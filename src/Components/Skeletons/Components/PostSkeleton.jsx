import React from 'react';
import * as S from '../Style/Skeletons.style';
import PropTypes from 'prop-types';

const PostSkeleton = ({ count }) => {
  
  return (
    Array.from({ length: count }).map((_, i) => (
      <S.PostSkeleton key={i}>
        <div className="header">
          <S.CustomSkeleton animation="wave" variant="circular" width={60} height={60} />
          <div className="user">
            <S.CustomSkeleton animation="wave" variant="rounded" width="65%" height={15} />
            <S.CustomSkeleton animation="wave" variant="rounded" width="40%" height={15} />
          </div>
        </div>
        <div className="body">
          <S.CustomSkeleton animation="wave" variant="rounded" width="100%" height={15} />
          <S.CustomSkeleton animation="wave" variant="rounded" width="75%" height={15} />
          <S.CustomSkeleton animation="wave" variant="rounded" width="100%" height={250} />
        </div>
        <div className="footer">
          <div className="footer__buttons">
            <S.CustomSkeleton animation="wave" width={60} height={30} />
            <S.CustomSkeleton animation="wave" width={60} height={30} />
          </div>
          <div>
            <S.CustomSkeleton animation="wave" width={60} height={30} />
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