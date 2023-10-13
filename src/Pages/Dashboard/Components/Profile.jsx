import React from 'react';
import * as S from '../Style/Dashboard.style';
import { Divider } from '../../../Components/Divider/Divider.style';
import UserProfile from '../../../Components/UserProfile/UserProfile';
import UserURL from '../../../assets/Pngs/foto.jpeg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

const Profile = () => {
   return (
      <S.Profile>
         <div className="user">
            <UserProfile 
               name="Goktug Sulun" 
               position="Frontend Developer"
               src={UserURL}
            />
         </div>
         <Divider />
         <div className="user-detail">
            <div className="user-detail__row">
               <LocationOnIcon />
               <span> Küçükçekmece, İstanbul </span>
            </div>
            <div className="user-detail__row">
               <SchoolIcon />
               <span> Bahcesehir University </span>
            </div>
            <div className="user-detail__row">
               <BusinessCenterIcon />
               <span> MDP Group </span>
            </div>
         </div>
         <Divider />
         <div className="profile-data">
            <div className="profile-data__row">
               <span className="profile-data__key"> Who&apos;s viewed your profile </span>
               <span className="profile-data__value"> 1281 </span>
            </div>
            <div className="profile-data__row">
            <span className="profile-data__key"> Impressions of your post </span>
            <span className="profile-data__value"> 264 </span>
            </div>
         </div>
         <Divider />
         <div className="social-profile">
            <div className="social-profile__title"> Social Profiles </div>
            <div className="social-profile__row"> 
               <div className="social-profile__info">
                  <TwitterIcon />
                  <div className="social-profile__names">
                     <span> Twitter </span>
                     <span className="link"> https://twitter.com </span>
                  </div>
               </div>
               <IconButton>
                  <EditIcon />
               </IconButton>
            </div>
            <div className="social-profile__row"> 
               <div className="social-profile__info">
                  <LinkedInIcon />
                  <div className="social-profile__names">
                     <span> LinkedIn </span>
                     <span className="link"> https://www.linkedin.com </span>
                  </div>
               </div>
               <IconButton>
                  <EditIcon />
               </IconButton>
            </div>
         </div>
      </S.Profile>
   );
};

export default Profile;