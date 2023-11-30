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
         .MuiInputLabel-root {
            color: #888;
            &.Mui-error {
               color: #d32f2f;
            }
         }
         .MuiOutlinedInput-root {
            background-color: #333;
            border-radius: 5px;
            .MuiIconButton-root {
               :hover {
                  background-color: #222;
               }
               svg path {
                  fill: #888;
               }
            }
            input {
               color: #FFFFFF;
               padding: 15px;
               ::placeholder {
                  color: #999;
               }
            }
            fieldset {
               border: none
            }
            &.Mui-error {
               fieldset {
                  border: 1px solid #d32f2f;
               }
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
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            :not(:last-child) {
               margin-bottom: 15px;
            }
            > div {
               flex: 1;
            }
         }
      }
      &__footer {
         display: flex;
         justify-content: flex-end;
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
   @media (max-width: 600px) {
      .content section .group {
         grid-template-columns: 1fr;
      }
   }
`;