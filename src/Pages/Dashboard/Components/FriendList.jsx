import React from 'react';
import * as S from '../Style/Dashboard.style';
import UserProfile from '../../../Components/UserProfile/UserProfile';
import { IconButton, Tooltip } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useSelector } from 'react-redux';

const FriendList = () => {
  const { user: authorizedUser } = useSelector((state) => state.Login);

  const removeFriend = () => {

  };

  return (
    <S.FriendList>
      <div className="title"> Friend List </div>
      {
        authorizedUser?.friends?.length
          ? authorizedUser?.friends?.map((obj) => (
            <div 
              key={obj.id} 
              className="friend"
            >
              <UserProfile 
                name={`${obj?.name || ''} ${obj?.surname || ''}`}
                position={obj?.position || ''}
                fontSize="25px"
                small
              />
              <Tooltip title="Remove Friend" placement="top" >
                <IconButton onClick={removeFriend}>
                  <PersonRemoveIcon />
                </IconButton>
              </Tooltip>
            </div>
          ))
          : <div className="no-friend"> Click &quot;Add Friend&quot; Icon on the top right of the post in order to add friend. </div>
      }
    </S.FriendList>
  );
};

export default FriendList;