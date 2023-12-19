import React from 'react';
import * as S from '../Style/Skeletons.style';
import PropTypes from 'prop-types';

const CommentSkeleton = ({ count }) => {
  return (
    Array.from({ length: count }).map((_, i) => (
      <S.CommentSkeleton key={i}>
        <S.CustomSkeleton animation="wave" variant="circular" width={50} height={50} />
        <div className="content">
          <div className="content__header">
            <div className="user">
              <S.CustomSkeleton animation="wave" variant="rounded" width="75%" height={10} />
              <S.CustomSkeleton animation="wave" variant="rounded" width="50%" height={10} />
            </div>
            <S.CustomSkeleton animation="wave" variant="circular" width={20} height={20} />
          </div>
          <div className="content__body">
            <S.CustomSkeleton animation="wave" variant="rounded" width="100%" height={15} />
          </div>
          <div className="content__footer">
            <S.CustomSkeleton animation="wave" variant="rounded" width={40} height={15} />
            <S.CustomSkeleton animation="wave" variant="rounded" width={40} height={15} />
            <S.CustomSkeleton animation="wave" variant="rounded" width={40} height={15} />
          </div>
        </div>
      </S.CommentSkeleton>
    ))
    
  );
};

export default CommentSkeleton;

CommentSkeleton.propTypes = {
  count: PropTypes.number
};

CommentSkeleton.defaultProps = {
  count: 1
};