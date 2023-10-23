import styled from '@emotion/styled';
import { Divider, Menu } from '@mui/material';
import { styled as muiStyled, alpha } from '@mui/material/styles';
import { Button } from '../../../Core/Components/Buttons/Button.style';

export const Header = styled.div`
   width: 100vw;
   height: 90px;
   background-color: #181818;
   display: flex;
   justify-content: space-between;
   padding: 0 75px;
   transition: padding 350ms;

   @media (max-width: 900px) {
      padding: 0 40px;
   }
`;

export const Search = styled.div`
   display: flex;
   align-items: center;
   gap: 35px;
   .title {
      color: #927CD9;
   }
   .MuiOutlinedInput-root {
      background-color: #2d2d2d;
      color: #FFFFFF;
      input {
         padding: 10px 5px 10px 15px;
      }
      fieldset {
         border: none;
      }
      .MuiIconButton-root {
         svg {
            opacity: .4;
            transition: opacity 350ms;
            path {
               fill: #FFFFFF;
            }
         }
         :hover {
            background-color: #333;
            svg {
               opacity: 1;
            }
         }
      }
   }
`;

export const Tools = styled.div`
   display: flex;
   align-items: center;
   gap: 25px;
   transition: gap 350ms;
   .MuiIconButton-root {
      :hover {
         background-color: #333;
      }
      svg path {
         fill: #FFFFFF;
      }
   }
   @media (max-width: 900px) {
      gap: 15px;
   }
`;

export const MenuWrapper = styled.div`
   .menu-button {
      display: none;
   }
   .MuiIconButton-root {
      width: 40px;
      height: 40px;
   }
   @media (max-width: 600px) {
      .menu-button {
         display: block;
      }
      .profile-button {
         display: none;
      }
   }
`;

export const NoticationsMenuWrapper = styled.div`
   .MuiIconButton-root {
      width: 40px;
      height: 40px;
   }
   @media (max-width: 600px) {
      .menu-button {
         display: block;
      }
      .profile-button {
         display: none;
      }
   }
`;

export const CustomDivider = styled(Divider)`
   margin: ${(props) => props.margin || '5px 0'};
   border-color: #444;
`;

export const StyledMenu = muiStyled(Menu)(({ theme }) => ({
   '& .MuiPaper-root': {
     borderRadius: 6,
     backgroundColor: '#2d2d2d',
     marginTop: '15px',
     width: 600,
     overflowX: 'hidden',
     color:
       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
     boxShadow:
       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
     '& .MuiMenu-list': {
       padding: '0',
     },
     '& .MuiMenuItem-root': {
       color: '#c7c5c5',
       padding: '10px 20px',
       '&:not(:last-child)': {
         borderBottom: '1px solid #555'
       },
       '& .user-info__name': {
         fontSize: 16
       },
       '& .MuiSvgIcon-root': {
         fontSize: 18,
         color: '#c7c5c5',
         marginRight: theme.spacing(1.5),
         '& path': {
           fill: '#c7c5c5'
         },
       },
       '&:active': {
         backgroundColor: alpha(
           theme.palette.primary.main,
           theme.palette.action.selectedOpacity,
         ),
       },
     },
   },
 }));

export const NotificationItem = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;
   img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
   }
   .description {
      font-size: 16px;
      span {
         white-space: normal;
      }
      &__sender-user {
         font-weight: 600;
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
      /* flex-wrap: wrap; */
      button {
         padding: 5px 10px;
         font-size: 14px;
      }
   }
 `;

export const ShowAllButton = styled(Button)`
   width: 100%;
   background-color: transparent;
   padding: 10px 0;
   border-radius: 0;
   background-color: #444;
   border-top: 1px solid #555;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   :hover {
      background-color: #555;
   }
   .more-count {
      font-size: 14px;
      display: inline-block;
      margin-left: 10px;
      color: #9f9d9d;
   }
 `;

export const NotificationsContent = styled.div`
   max-height: 400px;
   overflow-y: auto;
   overflow-x: hidden;
   position: relative;
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