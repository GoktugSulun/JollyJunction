import styled from '@emotion/styled';
import { ContentWrapper } from '../../../Core/Components/Pages/ContentWrapper.style';

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
            :hover {
               background-color: #333;
            }
            svg path {
               fill: #FFFFFF;
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
         .link {
            color: #7a7a7a;
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
   img {
      border-radius: 10px;
      margin: 15px 0;
      width: 100%;
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
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      height: auto;
      border-radius: 10px;
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