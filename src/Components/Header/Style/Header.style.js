import styled from '@emotion/styled';
import { Divider, alpha } from '@mui/material';

export const Header = styled.div`
   width: 100vw;
   height: 90px;
   background-color: #181818;
   display: flex;
   justify-content: space-between;
   padding: 0 75px;
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
   .MuiIconButton-root {
      :hover {
         background-color: #333;
      }
      svg path {
         fill: #FFFFFF;
      }
   }
`;

export const MenuWrapper = styled.div`

`;

export const CustomDivider = styled(Divider)`
   margin: 5px 0;
   border-color: #444;
`;