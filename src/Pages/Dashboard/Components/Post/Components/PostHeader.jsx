import React from 'react';
import UserProfile from '../../../../../Components/UserProfile/UserProfile';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Loading from '../../../../../Core/Components/Loading/Loading';
import { getUserImageURL } from '../../../../../assets/Pngs/Pngs';
import AddFriend from './AddFriend';
import RespondRequest from './RespondRequest';
import Cancel from './Cancel';

const PostHeader = ({ data }) => {
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);
  const { loading } = useSelector((state) => state.Dashboard);


  const getComponent = () => {
    if (data?.canBeFriend?.sender_id === authorizedUser.id) {
      return <Cancel />;
    }

    if (data?.canBeFriend?.sender_id === data.user.id) {
      return <RespondRequest />;
    }

    if (data?.canBeFriend) {
      return <AddFriend />;
    }

    return null;
  };

  return (
    <div className="header">
      <UserProfile
        name={`${data?.user?.name || ''} ${data?.user?.surname || ''}`}
        position={data?.user?.position || ''}
        src={getUserImageURL(data?.user?.img)}
      />
      {
        loading?.addFriend
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