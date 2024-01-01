import { useDispatch, useSelector } from 'react-redux';
import { useIntersectionObserver } from '../../../Hooks';
import { DashboardSagaActions } from '../Store/Dashboard.saga';
import { useEffect } from 'react';
import UserProfile from '../../../Components/UserProfile/UserProfile';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { getFileURL } from '../../../Core/Utils/File';
import { IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

const options = {
  threshold: 1
};

const Friend = ({ data, isLastElement }) => {
  const dispatch = useDispatch();
  const { pageForFriendList, limitForFriendList, canBeMoreFriends } = useSelector((state) => state.Dashboard);
  const { ref, isIntersecting } = useIntersectionObserver({ options, triggerOnce: true });
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);
 
  const removeFriend = (friend_id) => {
    const payload = {
      user_id: authorizedUser.id,
      friend_id
    };
    dispatch(DashboardSagaActions.deleteFriend(payload));
  };
 
  useEffect(() => {
    if (isIntersecting && canBeMoreFriends) {
      dispatch(DashboardSagaActions.getFriends({ query: `?user_id=${authorizedUser.id}&page=${pageForFriendList}&limit=${limitForFriendList}&is_removed=false` }));
    }
  }, [isIntersecting]);
 
 
  return (
    <div 
      className="friend"
      ref={(el) => {
        if (isLastElement) {
          ref.current = el;
        }
      }}
    >
      <UserProfile 
        name={`${data?.name || ''} ${data?.surname || ''}`}
        id={data.id}
        position={data?.position || ''}
        fontSize="25px"
        small
        src={getFileURL(data.img)}
      />
      <Tooltip title="Remove Friend" placement="top" >
        <IconButton onClick={() => removeFriend(data.id)}>
          <PersonRemoveIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Friend;
 
Friend.propTypes = {
  data: PropTypes.object.isRequired,
  isLastElement: PropTypes.bool.isRequired
};