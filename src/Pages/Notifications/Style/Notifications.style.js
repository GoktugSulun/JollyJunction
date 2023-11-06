import styled from '@emotion/styled';
import { ContentWrapper } from '../../../Core/Components/Pages/ContentWrapper.style';
import { css } from '@emotion/react';

export const Notifications = styled(ContentWrapper)`
   background-color: #0f0f0f;
   display: flex;
   justify-content: center;
   padding: 0 75px;
   gap: 50px;
   transition: padding 350ms;

   @media (max-width: 900px) {
      padding: 0 40px;
   }
`;

export const NotificationsContent = styled.div`
   background-color: #181818;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   margin: 30px 0;
   ::-webkit-scrollbar {
      width: 5px;
   }
   ::-webkit-scrollbar-track {
      background: inherit; 
   }
   ::-webkit-scrollbar-thumb {
      background: #555; 
      border-radius: 10px;
   }
`;


export const NotificationItem = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;
   padding: 15px 20px;
   cursor: pointer;
   transition: background-color 150ms;
   :first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
   }
   :last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
   }
   :hover {
      background-color: #222;
   }
   ::before {
      content: "";
      transition: scale 350ms;
      min-width: 10px;
      height: 10px;
      background-color: ${(props) => !props.read ? 'red' : 'inherit'};
      border-radius: 50%;
   }
   img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
   }
   .description {
      font-size: 16px;/
      span {
         white-space: normal;
      }
      &__sender-user {
         font-weight: 600;
         color: #c7c5c5;
         text-decoration: none;
         :hover {
            text-decoration: underline;
         }
      }
      &__text {
         color: #c7c5c5;
      }
      &__date {
         font-size: 14px;
         color: #9f9d9d;
      }
   }
   .buttons {
      display: flex;
      align-items: center;
      gap: 10px;
      button {
         padding: 5px 10px;
         font-size: 14px;
      }
   }
 `;