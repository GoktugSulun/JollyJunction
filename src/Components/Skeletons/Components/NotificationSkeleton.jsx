import React from 'react';
import * as S from '../Style/Skeletons.style';
import PropTypes from 'prop-types';

const NotificationSkeleton = ({ count }) => {
  return (
    Array.from({ length: count }).map((_, i) => (
      <S.NotificationSkeleton key={i}>
        <S.CustomSkeleton animation="wave" variant="circular" width={60} height={60} />
        <div className="content">
          <S.CustomSkeleton animation="wave" variant="rounded" width="100%" height={15} />
          <S.CustomSkeleton animation="wave" variant="rounded" width="70%" height={15} />
        </div>
        <S.CustomSkeleton animation="wave" variant="circular" width={20} height={20} />
      </S.NotificationSkeleton>
    ))
  );
};

export default NotificationSkeleton;

NotificationSkeleton.propTypes = {
  count: PropTypes.number
};

NotificationSkeleton.defaultProps = {
  count: 1
};