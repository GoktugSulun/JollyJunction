import React from 'react';
import * as S from '../Style/Skeletons.style';
import PropTypes from 'prop-types';

const FriendSkeleton = ({ count }) => {
  return (
    Array.from({ length: count }).map((_, i) => (
      <S.FriendSkeleton key={i}>
        <S.CustomSkeleton animation="wave" variant="circular" width={60} height={60} />
        <div className="content">
          <S.CustomSkeleton animation="wave" variant="rounded" width="100%" height={15} />
          <S.CustomSkeleton animation="wave" variant="rounded" width="70%" height={15} />
        </div>
        <S.CustomSkeleton animation="wave" variant="circular" width={30} height={30} />
      </S.FriendSkeleton>
    ))
  );
};

export default FriendSkeleton;

FriendSkeleton.propTypes = {
  count: PropTypes.number
};

FriendSkeleton.defaultProps = {
  count: 1
};