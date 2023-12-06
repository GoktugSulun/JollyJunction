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
import { getImage } from '../../../Core/Utils/Image';

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

  const getSocialMediaIcon = (type) => {
    switch (type) {
    case SocialMediaEnums.INSTAGRAM:
      return <InstagramIcon />;
    case SocialMediaEnums.LINKEDIN:
      return <LinkedInIcon />;
    case SocialMediaEnums.TWITTER:
      return <LinkedInIcon />;
    default:
      throw Error('undefined type of social media');
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
          src={getImage(data?.img)}
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
          <span> {data?.location || ''}, {data?.city || ''} </span>
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
        <div className="social-profile__title"> Social Profiles </div>
        {
          data?.social_medias?.map((obj) => (
            obj.url 
              ? <div key={obj.id} className="social-profile__row"> 
                <div className="social-profile__info">
                  <IconButton> {getSocialMediaIcon(obj.type)} </IconButton>
                  <div className="social-profile__names">
                    <span> {obj.name} </span>
                    <a href={obj.url} target="_blank" className="link" rel="noreferrer"> {obj.url} </a>
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