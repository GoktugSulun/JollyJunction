import React from 'react';
import * as S from '../Style/Dashboard.style';
import UserProfile from '../../../Components/UserProfile/UserProfile';
import { IconButton, Tooltip } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSagaActions } from '../Store/Dashboard.saga';
import Loading from '../../../Core/Components/Loading/Loading';
import { getFileURL } from '../../../Core/Utils/File';

const FriendList = () => {
  const dispatch = useDispatch();
  const { friends, loading } = useSelector((state) => state.Dashboard);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  const removeFriend = (friend_id) => {
    const payload = {
      user_id: authorizedUser.id,
      friend_id
    };
    dispatch(DashboardSagaActions.deleteFriend(payload));
  };

  return (
    <S.FriendList>
      <div className="title"> Friend List </div>
      {
        loading?.getFriends
          ? <Loading />
          : !friends.length
            ? <div className="no-friend"> Click &quot;Add Friend&quot; Icon on the top right of the post in order to add friend. </div>
            : friends.map((obj) => (
              <div 
                key={obj.id} 
                className="friend"
              >
                <UserProfile 
                  name={`${obj?.name || ''} ${obj?.surname || ''}`}
                  id={obj.id}
                  position={obj?.position || ''}
                  fontSize="25px"
                  small
                  src={getFileURL(obj.img)}
                />
                <Tooltip title="Remove Friend" placement="top" >
                  <IconButton onClick={() => removeFriend(obj.id)}>
                    <PersonRemoveIcon />
                  </IconButton>
                </Tooltip>
              </div>
            ))
      }
    </S.FriendList>
  );
};

export default FriendList;