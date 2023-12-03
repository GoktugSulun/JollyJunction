import React from 'react';
import UserProfile from '../../../../../Components/UserProfile/UserProfile';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Loading from '../../../../../Core/Components/Loading/Loading';
import AddFriend from './AddFriend';
import RespondRequest from './RespondRequest';
import Cancel from './Cancel';

const PostHeader = ({ data }) => {
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);
  const { loading } = useSelector((state) => state.Dashboard);
  const { loading: notificationLoading } = useSelector((state) => state.Notifications);


  const getComponent = () => {
    if (data?.canBeFriend?.sender_id === authorizedUser.id) {
      return <Cancel receiver_id={data.user.id} />;
    }

    if (data?.canBeFriend?.sender_id === data.user.id) {
      return <RespondRequest sender_id={data.user.id} />;
    }

    if (data?.canBeFriend) {
      return <AddFriend id={data.user.id} />;
    }

    return null;
  };

  return (
    <div className="header">
      <UserProfile
        name={`${data?.user?.name || ''} ${data?.user?.surname || ''}`}
        position={data?.user?.position || ''}
        src={data?.user?.img}
        id={data.user.id}
      />
      {
        (loading?.addFriend || notificationLoading?.cancelFriendshipRequest || loading?.acceptFriendship)
          ? <div> <Loading color="#FFF" size={25} /> </div>
          : getComponent()
      }
    </div>
  );
};

export default PostHeader;

PostHeader.propTypes = {
  data: PropTypes.object.isRequired
};