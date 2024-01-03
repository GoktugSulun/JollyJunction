import styled from '@emotion/styled';
import { Divider, IconButton, Menu } from '@mui/material';
import { styled as muiStyled, alpha, css } from '@mui/material/styles';

export const Header = styled.div`
   position: sticky;
   top: 0;
   z-index: 999;
   width: 100vw;
   height: 90px;
   background-color: #181818;
   display: flex;
   justify-content: space-between;
   padding: 0 75px;
   transition: padding 350ms;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

   @media (max-width: 1536px) {
      padding: 0 40px;
   }
   @media (max-width: 900px) {
      padding: 0 20px;
   }
`;

export const Search = styled.div`
   display: flex;
   align-items: center;
   gap: 35px;
   .title {
      color: #927CD9;
      font-size: 35px;
      border-radius: 10px;
      padding: 10px 20px;
      :hover {
         background: #333;
      }
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
   @media (max-width: 900px) {
      .title {
         padding: 10px;
      }
   }
`;

export const Tools = styled.div`
   display: flex;
   align-items: center;
   gap: 25px;
   transition: gap 350ms;
   .MuiIconButton-root {
      width: 40px;
      height: 40px;
      :hover {
         background-color: #333;
      }
      svg {
         width: 100%;
         height: 100%;
         path {
            fill: #FFFFFF;
         }
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

export const NotificationIconButton = styled(IconButton)`
   position: relative;
   ${(props) => props.open && css`
      background: #333;
   `}
   ::before {
      content: ${(props) => `"${props.count}"`};
      scale: ${(props) => props.count > 0 ? 1 : 0};
      transition: scale 350ms;
      position: absolute;
      top: 0;
      right: 0;
      width: 15px;
      height: 15px;
      padding: 2px;
      background-color: red;
      color: #fff;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
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