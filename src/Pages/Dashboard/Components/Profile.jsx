import React from 'react';
import * as S from '../Style/Dashboard.style';
import { Divider } from '../../../Components/Divider/Divider.style';
import UserProfile from '../../../Components/UserProfile/UserProfile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { UserImages } from '../../../assets/Pngs/Pngs';
import PropTypes from 'prop-types';

const Profile = ({ data }) => {

  const getUserSrc = () => {
    return UserImages.find((src) => src.includes(data?.img)) || null;
  };

  return (
    <S.Profile>
      <div className="user">
        <UserProfile 
          name={`${data?.name || ''} ${data?.surname || ''}`}
          position={data?.position || ''}
          src={getUserSrc()}
        />
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

Profile.propTypes = {
  data: PropTypes.object.isRequired
};