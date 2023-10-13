import styled from '@emotion/styled';
import { ContentWrapper } from '../../../Core/Components/Pages/ContentWrapper.style';

export const Dashboard = styled(ContentWrapper)`
   background-color: #0f0f0f;
   display: grid;
   grid-template-columns: 1fr 2fr 1fr;
   padding: 0 75px;
   margin-top: 50px;
   gap: 50px;
`;

export const ProfileWrapper = styled.div`
   
`;

export const PostWrapper = styled.div`

`;

export const SidebarWrapper = styled.div`

`;

export const Profile = styled.div`
   background: #181818;
   border-radius: 10px;
   padding: 25px;
   .user-info {
      &__name {
         color: #c9c9c9;
         font-size: 18px;
      }
      &__position {
         margin-top: 2px;
         color: #9d9a9a;
         font-size: 14px;
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
            color: #575757;
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
         color: #575757;
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
         color: #575757;
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
            color: #575757;
         }
      }
   }
`;

export const FriendList = styled.div`
   background: #181818;
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