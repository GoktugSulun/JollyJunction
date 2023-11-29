import React, { useEffect, useState } from 'react';
import * as S from '../Style/Dashboard.style';
import { Divider } from '../../../Components/Divider/Divider.style';
import UserProfile from '../../../Components/UserProfile/UserProfile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TwitterIcon from '@mui/icons-material/Twitter';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Tooltip } from '@mui/material';
import { getUserImageURL } from '../../../assets/Pngs/Pngs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserProfileSagaActions } from '../../UserProfile/Store/UserProfile.saga';

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
    const user_id = pathname?.split('/')?.[3];
    if (pathname.includes('/profile') && authorizedUser?.id !== parseInt(user_id)) {
      const user_id = pathname.split('/')[3];
      dispatch(UserProfileSagaActions.getUserById({ user_id }));
    }
  }, [pathname]);

  return (
    <S.Profile>
      <div className="user">
        <UserProfile 
          name={`${data?.name || ''} ${data?.surname || ''}`}
          position={data?.position || ''}
          src={getUserImageURL(data?.img)}
          clickable={false}
        />
        {
          authorizedUser.id === data?.id 
            && (<Tooltip title="Edit My Informations">
              <IconButton onClick={navigateSettings}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>)
        }
      </div>
      <Divider />
      <div className="user-detail">
        <div className="user-detail__row">
          <LocationOnIcon />
          <span> {data?.town || ''}, {data?.city || ''} </span>
        </div>
        <div className="user-detail__row">
          <SchoolIcon />
          <span> {data?.school || ''} </span>
        </div>
        <div className="user-detail__row">
          <BusinessCenterIcon />
          <span> {data?.company || ''} </span>
        </div>
      </div>
      <Divider />
      <div className="profile-data">
        <div className="profile-data__row">
          <span className="profile-data__key"> Who&apos;s viewed your profile </span>
          <span className="profile-data__value"> - </span>
        </div>
        <div className="profile-data__row">
          <span className="profile-data__key"> Impressions of your post </span>
          <span className="profile-data__value"> - </span>
        </div>
      </div>
      <Divider />
      <div className="social-profile">
        <div className="social-profile__title"> Social Profiles </div>
        {
          data?.social_profiles?.map((obj) => (
            <div key={obj.id} className="social-profile__row"> 
              <div className="social-profile__info">
                <TwitterIcon />
                <div className="social-profile__names">
                  <span> {obj.name} </span>
                  <span className="link"> {obj.url} </span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </S.Profile>
  );
};

export default Profile;