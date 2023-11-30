import styled from '@emotion/styled';
import { ContentWrapper } from '../../../Core/Components/Pages/ContentWrapper.style';
import { hexToRgbA } from '../../../Core/Utils/Utils';
import { css } from '@emotion/react';

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
         .container {
            display: flex;
            align-items: center;
            gap: 40px;
         }
         .group {
            flex: 1;
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
      .content section {
         .group {
            grid-template-columns: 1fr;
         }
         .container {
            flex-direction: column;
            gap: 20px;
            align-items: stretch;
            .img-container {
               align-self: center;
            }
         }
      }
   }
`;

export const Image = styled.div`
   .img-container {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      position: relative;
      ${(props) => !props.isUploading && css`
         :hover {
            .overlay {
               opacity: 1;
               .MuiIconButton-root {
                  svg {
                     scale: 1;
                  }
               }
            }
            .img.img__letter {
               opacity: 0;
               color: red;
            }
         }
      `}
      .loading-container {
         width: 100%;
         height: 100%;
         border-radius: 50%;
         position: absolute;
         top: 0;
         left: 0;
         display: flex;
         align-items: center;
         justify-content: center;
      }
      .img {
         width: 100%;
         height: 100%;
         border-radius: 50%;
         object-fit: cover;
         &__letter {
            border: 2px solid #333;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #888;
            font-size: 90px;
         }
      }
      .overlay {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         border-radius: 50%;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: rgba(0, 0, 0, 0.5); 
         z-index: 99;
         opacity: 0;
         transition: opacity 0.3s ease-in-out;
         cursor: pointer;
         input {
            opacity: 0;
            visibility: hidden;
            width: 100%;
            height: 100%;
            position: absolute;
         }
         .MuiIconButton-root {
            width: 100%;
            height: 100%;
            svg {
               font-size: 70px;
               scale: 0;
               transition: scale 0.3s ease-in-out;
               path {
                  fill: #FFFFFF;
               }
            }
         }
      }
   }
   .delete-button {
      background-color: transparent;
      color: #7d7c7c;
      padding: 5px 20px;
      margin-top: 10px;
      font-size: 14px;
      :hover {
         color: #dc3545;
      }
      &.Mui-disabled {
         color: #7d7c7c;
         background-color: transparent;
      }
   }
`;