import React, { useEffect, useState } from 'react';
import * as S from '../Style/Dashboard.style';
import { Divider } from '../../../Components/Divider/Divider.style';
import UserProfile from '../../../Components/UserProfile/UserProfile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserProfileSagaActions } from '../../UserProfile/Store/UserProfile.saga';
import SocialMediaEnums from './Enums/SocialMediaEnums';
import { getFileURL } from '../../../Core/Utils/File';
import AddFriend from './Post/Components/AddFriend';
import RespondRequest from './Post/Components/RespondRequest';
import Cancel from './Post/Components/Cancel';
import useHttpResponse from '../../../Core/Hooks/useHttpResponse';
import { DashboardSagaActions } from '../Store/Dashboard.saga';
import { NotificationSagaActions } from '../../Notifications/Store/Notifications.saga';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AddIcon from '@mui/icons-material/Add';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);
  const { user, loading } = useSelector((state) => state.UserProfile);

  const navigateSettings = () => {
    navigate('/settings');
  };

  const removeFriend = (friend_id) => {
    const payload = {
      user_id: authorizedUser.id,
      friend_id
    };
    dispatch(DashboardSagaActions.deleteFriend(payload));
  };

  const getSocialMediaIcon = (type) => {
    switch (type) {
    case SocialMediaEnums.INSTAGRAM:
      return <InstagramIcon />;
    case SocialMediaEnums.LINKEDIN:
      return <LinkedInIcon />;
    case SocialMediaEnums.TWITTER:
      return <TwitterIcon />;
    default:
      return null;
    }
  };

  const getAddRemoveFriendshipComponent = () => {
    if (!data?.id || authorizedUser.id === data.id) {
      return null;
    }

    if (data.canBeFriend?.sender_id === data.id) {
      return <RespondRequest sender_id={data.id} />;
    }

    if (data.canBeFriend?.sender_id === authorizedUser.id) {
      return <Cancel receiver_id={data.id} />;
    }

    if (data?.canBeFriend === false) {
      return (
        <Tooltip title="Remove Friend" placement="top" >
          <IconButton onClick={() => removeFriend(data.id)}>
            <PersonRemoveIcon />
          </IconButton>
        </Tooltip>
      );
    }

    if (data?.canBeFriend === true) {
      return <AddFriend id={data.id} />;
    }
    
    return null;
  };

  const fetchUser = () => {
    const user_id = pathname?.split('/')?.[3];
    if (pathname.includes('/profile') && authorizedUser?.id !== parseInt(user_id)) {
      const user_id = pathname.split('/')[3];
      dispatch(UserProfileSagaActions.getUserById({ user_id }));
    }
  };

  useEffect(() => {
    if (loading?.getUserById) {
      return;
    }
    const user_id = pathname?.split('/')?.[3];
    if (pathname.includes('/profile') && authorizedUser?.id !== parseInt(user_id)) {
      setData(user);
    } else {
      setData(authorizedUser);
    }
  }, [loading, pathname]);

  useEffect(() => {
    fetchUser();
  }, [pathname]);

  useHttpResponse({
    success: () => {
      fetchUser();
    }
  }, DashboardSagaActions.acceptFriendship());

  useHttpResponse({
    success: () => {
      fetchUser();
    }
  }, DashboardSagaActions.deleteFriend());

  useHttpResponse({
    success: () => {
      fetchUser();
    }
  }, DashboardSagaActions.rejectFriendship());

  useHttpResponse({
    success: () => {
      fetchUser();
    }
  }, DashboardSagaActions.addFriend());

  useHttpResponse({
    success: () => {
      fetchUser();
    }
  }, NotificationSagaActions.cancelFriendshipRequest());

  return (
    <S.Profile>
      <div className="user">
        <UserProfile 
          name={`${data?.name || ''} ${data?.surname || ''}`}
          position={data?.position || ''}
          src={getFileURL(data?.img)}
          clickable={false}
        />
        {
          authorizedUser.id === data?.id 
            ? (<Tooltip title="Edit My Informations">
              <IconButton className="settings" onClick={navigateSettings}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>)
            : data?.id && getAddRemoveFriendshipComponent()
        }
      </div>
      <Divider />
      <div className="user-detail">
        <div className="user-detail__row">
          <LocationOnIcon />
          <span> {data?.location || ''} {data?.location && data?.city && ', '} {data?.city || ''} { !data?.city && !data.location && '-------' } </span>
        </div>
        <div className="user-detail__row">
          <SchoolIcon />
          <span> {data?.school || '-------'} </span>
        </div>
        <div className="user-detail__row">
          <BusinessCenterIcon />
          <span> {data?.company || '-------'} </span>
        </div>
      </div>
      <Divider />
      {/* <div className="profile-data">
        <div className="profile-data__row">
          <span className="profile-data__key"> Who&apos;s viewed your profile </span>
          <span className="profile-data__value"> - </span>
        </div>
        <div className="profile-data__row">
          <span className="profile-data__key"> Impressions of your post </span>
          <span className="profile-data__value"> - </span>
        </div>
      </div>
      <Divider /> */}
      <div className="social-profile">
        <div className="social-profile__title"> 
          Social Profiles 
          { data?.social_medias?.filter((obj) => obj.url)?.length < 3
            && data?.id === authorizedUser.id
            && <IconButton onClick={() => navigate('/settings')}>
              <AddIcon />
            </IconButton> }
        </div>
        {
          data?.social_medias?.map((obj) => (
            obj.url 
              ? <div key={obj?.id} className="social-profile__row"> 
                <div className="social-profile__info">
                  <IconButton> {getSocialMediaIcon(obj?.type)} </IconButton>
                  <div className="social-profile__names">
                    <span> {obj?.name} </span>
                    <Tooltip title={obj?.url}>
                      <a href={obj?.url} target="_blank" className="link" rel="noreferrer"> {obj?.url} </a>
                    </Tooltip>
                  </div>
                </div>
              </div>
              : null
          ))
        }
      </div>
    </S.Profile>
  );
};

export default Profile;