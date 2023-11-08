import React from 'react';
import * as S from '../Style/Notifications.style';
import PropTypes from 'prop-types';
import { getUserImageURL } from '../../../assets/Pngs/Pngs';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import { NotificationTypes } from '../../../Core/Constants/Enums';
import moment from 'moment';
import Buttons from './Buttons';

const Content = ({ data }) => {
  const navigate = useNavigate();

  const navigateToUserProfile = (user) => {
    const url = `/profile/${user.name.split(' ').join('')}${user.surname}/${user.id}`;
    navigate(url);
  };

  const getNotificationMessage = () => {
    switch (data.type) {
    case NotificationTypes.REQUEST_FOR_FRIENDSHIP:
      return 'sent you a friendship request.';
    case NotificationTypes.LIKED_POST:
      return 'liked your post.';
    case NotificationTypes.COMMENTED_POST:
      return 'commented on your post.';
    case NotificationTypes.ACCEPTED_FRIENDSHIP_REQUEST:
      return 'accepted your friendship request.';
    case NotificationTypes.YOU_ARE_FRIEND_NOW:
      return 'and you are friends now.';
    default:
      throw new Error('undefined notification type!');
    }
  };

  return (
    <S.Content read={data.read}>
      <div className="dot"> </div>
      <div className="content">
        <img alt="sender-user" src={getUserImageURL(data?.sender_user?.img)} />
        <div className="content__main">
          <p className="description">
            <Button 
              className="description__sender-user"
              bgColor="transparent"
              padding="0"
              onClick={() => navigateToUserProfile(data.sender_user)}
            >  
              { `${data.sender_user.name} ${data.sender_user.surname}` } 
            </Button>
            <span className="description__text"> {getNotificationMessage()} </span>
            <span className="description__date"> {moment(data.created_at).fromNow()} </span>
          </p>
          { data.type === NotificationTypes.REQUEST_FOR_FRIENDSHIP && <Buttons data={data} /> }
        </div>
      </div>
    </S.Content>
  );
};

export default Content;

Content.propTypes = {
  data: PropTypes.object.isRequired
};