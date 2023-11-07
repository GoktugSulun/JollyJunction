import styled from '@emotion/styled';
import { ContentWrapper } from '../../../Core/Components/Pages/ContentWrapper.style';
import Menu from '@mui/material/Menu';

export const Notifications = styled(ContentWrapper)``;

export const NotificationsContent = styled.div`
   background-color: #181818;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
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

export const Content = styled.div`
   display: flex;
   align-items: center;
   gap: 25px;
   flex: 1;
   .dot {
      min-width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${(props) => props.seen ? 'inherit' : 'red'};
   }
   .content {
      display: flex;
      align-items: center;
      gap: 25px;
      img {
         width: 60px;
         height: 60px;
         border-radius: 50%;
      }
      &__main {
         display: flex;
         align-items: center;
         flex-wrap: wrap;
         gap: 10px 25px;
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
      }
   }
`;

export const SettingsWrapper = styled.div`
   .MuiIconButton-root {
      width: 40px;
      height: 40px;
      :hover {
         background-color: #333;
         svg path {
            fill: #FFFFFF;
         }
      }
      svg {
         width: 100%;
         height: 100%;
         path {
            transition: fill 150ms;
            fill: #9a9a9a
         }
      }
   }
`;

export const SettingsMenu = styled(Menu)`
   .MuiPaper-root {
      background-color: #2d2d2d;
      .MuiList-root {
         color: #c7c5c5;
         padding: 0;
         .MuiMenuItem-root {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px 20px 15px 15px;
            :hover {
               background-color: #454444;
            }
            svg {
               font-size: 20px;
            }
         }
      }
   }
`;

export const Buttons = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   button {
      padding: 5px 10px;
      font-size: 14px;
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
   position: relative;
   :not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #555; 
   }
 `;