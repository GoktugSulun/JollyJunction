import styled from '@emotion/styled';
import { ContentWrapper } from '../../../Core/Components/Pages/ContentWrapper.style';

export const Settings = styled(ContentWrapper)`
   .content {
      grid-column: 2 / 3;
      background: #181818;
      border-radius: 10px;
      padding: 20px;
      transition: width 350ms;
      display: flex;
      flex-direction: column;
      gap: 25px;
      .MuiFormControl-root {
         label {
            color: #888;
         }
         .MuiOutlinedInput-root {
            background-color: #333;
            border-radius: 5px;
            input {
               color: #FFFFFF;
               padding: 15px;
            }
            fieldset {
               border: none
            }
         }
      }
      section {
         .title {
            color: #c9c9c9;
            font-weight: 500;
            margin-bottom: 20px;
         }
         .group {
            display: flex;
            gap: 20px;
            :not(:last-child) {
               margin-bottom: 15px;
            }
            > div {
               flex: 1;
            }
         }
      }
   }
   @media (max-width: 1536px) {
      display: flex;
      justify-content: center;
      .content {
         width: 70%;
      }
   }
   @media (max-width: 900px) {
      .content {
         width: 100%;
      }
   }
`;