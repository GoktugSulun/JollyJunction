import styled from '@emotion/styled';
import { ContentWrapper } from '../../../Core/Components/Pages/ContentWrapper.style';
import { IconButton } from '@mui/material';
import overridedProps from '../../../Core/Helpers/overridedProps';

export const Dashboard = styled(ContentWrapper)``;

export const ProfileWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 25px;

   @media (max-width: 900px) {
      margin-bottom: 25px;
   }
`;

export const PostWrapper = styled.div`
   .loading-container {
      margin: 50px 0;
   }
   .more-button-container {
      margin: 25px 0;
      display: flex;
      justify-content: center;
      button {
         width: 50%;
      }
   }
   @media (max-width: 900px) {
      .more-button-container {
         button {
            width: 100%;
         }
      }
   }
`;

export const SidebarWrapper = styled.div`
   @media (max-width: 900px) {
      display: none;
   }
`;

export const Profile = styled.div`
   background: #181818;
   border-radius: 10px;
   padding: 25px;
   top: 400px;
   width: 100%;
   transition: width 350ms;
   .user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      .MuiIconButton-root {
         svg {
            path {
               fill: #9a9a9a;
            }
         }
         :hover {
            background-color: #333;
            svg path {
               fill: #FFFFFF;
            }
         }
      }
   }
   .user-detail {
      &__row {
         display: flex;
         align-items: center;
         gap: 15px;
         :not(:last-child) {
            margin-bottom: 10px;
         }
         svg {
            font-size: 30px;
            path {
               fill: #9a9a9a;
            }
         }
         span {
            color: #7a7a7a;
            font-size: 14px;
         }
      }
   }
   .profile-data {
      &__row {
         :not(:last-child) {
            margin-bottom: 10px;
         }
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__key {
         color: #7a7a7a;
         font-size: 14px;
      }
      &__value {
         color: #9c9c9c;
         font-size: 14px;
      }
   }
   .social-profile {
      &__title {
         color: #9a9a9a;
      }
      &__row {
         display: flex;
         align-items: center;
         justify-content: space-between;
         margin-top: 20px;
         gap: 10px;
         svg {
            font-size: 22px;
            path {
               fill: #9a9a9a;
            }
         }
         .MuiIconButton-root {
            &:has(+ .social-profile__names .link:hover) {
               svg path {
                  fill: #FFFFFF;
               }
            }
            :hover {
               background-color: #333;
               svg path {
                  fill: #FFFFFF;
               }
               + .social-profile__names .link {
                  color: #FFFFFF;
               }
            }
            svg path {
               fill: #9a9a9a;
            }
         }
      }
      &__info {
         display: flex;
         align-items: center;
         gap: 15px;
         color: #7a7a7a;
         svg {
            font-size: 30px;
         }
      }
      &__names {
         display: flex;
         flex-direction: column;
         color: #9a9a9a;
         font-size: 14px;
         word-break: break-all;
         .link {
            color: #7a7a7a;
            transition: all 350ms;
            :hover {
               color: #FFFFFF;
            }
         }
      }
   }
`;

export const Advertisement = styled.div`
   background: #181818;
   padding: 25px;
   border-radius: 10px;
   .header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      &__title {
         font-weight: 500;
         color: #c9c9c9;
      }
   }
   .carousel {
      position: relative;
      margin: 15px 0;
      display: flex;
      align-items: center;
      :hover {
         .overlay {
            opacity: 1;
         }
         .arrow {
            opacity: 1;
            background-color: rgba(0, 0, 0, 0.3);
            svg path {
               fill: #FFFFFF;
            }
         }
      }
      .overlay {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: calc(100%);
         background-color: rgba(0, 0, 0, 0.3); 
         z-index: 99;
         border-radius: 10px;
         opacity: 0;
         transition: opacity 0.3s ease-in-out;
         cursor: pointer;
      }
      .dots {
         position: absolute;
         width: 100%;
         bottom: 5px;
         display: flex;
         z-index: 999;
         justify-content: center;
         align-items: center;
         gap: 10px;
      }
      .arrow {
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         z-index: 999;
         opacity: 0;
         transition: background 350ms, opacity 350ms;
         &__back {
            left: 5px;
         }
         &__forward {
            right: 5px;
         }
      }
      img {
         border-radius: 10px;
         width: 100%;
         /* height: 180px; */
         max-height: 300px;
         cursor: pointer;
         object-fit: cover;
         object-position: center;
      }
   }
   .sponsor {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      &__name {
         font-size: 14px;
         color: #c9c9c9;
         opacity: .7;
      }
      &__url {
         font-size: 14px;
         color: #575757;
         text-decoration: none;
         transition: color 350ms;
         :hover {
            color: #b0aeae;
            text-decoration: underline;
         }
      }
   }
   .description {
      margin-top: 15px;
      color: #575757;
      font-size: 14px;
   }
`;

export const DotIconButton = styled(IconButton, overridedProps)`
   padding: 0;
   svg {
      font-size: 10px;
      path {
         transition: fill 350ms;
         fill: ${(props) => props.$active ? '#FFFFFF' : '#333333'};
      }
   }
`;

export const FriendList = styled.div`
   background: #181818;
   border-radius: 10px;
   margin-top: 30px;
   padding: 25px;
   .title {
      color: #c9c9c9;
      font-weight: 500;
      margin-bottom: 20px;
   }
   .friend {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
      .MuiIconButton-root {
         background-color: #333;
         :hover {
            background-color: #555;
         }
         svg path {
            fill: #927CD9;
         }
      }
   }
   .no-friend {
      color: #575757;
      font-size: 14px;
   }
`;

export const CreatePost = styled.div`
   background: #181818;
   border-radius: 10px;
   padding: 25px 25px 15px 25px;
   margin-bottom: 25px;
   .header {
      display: flex;
      align-items: center;
      gap: 30px;
      img {
         width: 60px;
         height: 60px;
         border-radius: 50%;
      }
      .MuiOutlinedInput-root {
         background-color: #2d2d2d;
         border-radius: 30px;
         input {
            color: #FFFFFF;
            padding: 20px 30px;
         }
         fieldset {
            border: none;
         }
      }
   }
   img.user-post-img {
      //TODO: width kısmında problem var 
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      height: auto;
      border-radius: 10px;
   }
   canvas {
      width: 100%;
      height: 400px;
      /* height: 100%; */
      /* object-fit: contain; */
   }
   .tools {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      .MuiButton-root {
         position: relative;
         input {
            opacity: 0;
            visibility: hidden;
            width: 100%;
            height: 100%;
            position: absolute;
         }
      }
   }
`;

export const Post = styled.div`
   background-color: #181818;
   border-radius: 10px;
   margin-bottom: 25px;
   padding: 25px 25px 15px 25px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      .MuiIconButton-root {
         background-color: #333;
         :hover {
            background-color: #555;
         }
         svg path {
            fill: #927CD9;
         }
      }
   }
   .description {
      color: #c9c9c9;
      font-size: 14px;
      margin-top: 10px;
   }
   img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      height: auto;
      border-radius: 10px;
      cursor: pointer;
   }
   .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      .MuiIconButton-root {
         :hover {
            background-color: #333;
         }
         svg path {
            fill: #927CD9;
         }
      }
      .comment {
         margin-left: 15px;
      }
      .count {
         color: #927CD9;
      }
   }
`;

export const RespondRequest = styled.div`
   .text {
      color: #c9c9c9;
      font-size: 14px;
   }
   .buttons {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 5px;
      button {
         flex: 1;
      }
   }
`;