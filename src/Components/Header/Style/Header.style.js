import styled from '@emotion/styled';
import { Divider } from '@mui/material';

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

export const CustomDivider = styled(Divider)`
   margin: 5px 0;
   border-color: #444;
`;