import styled from '@emotion/styled';

export const SettingsModal = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   display: flex;
   justify-content: center;
   outline: none;
   border: none;
   width: 100%;
   .hidden-wrapper {
      width: 900px;
      max-height: 90vh;
      overflow-y: auto;
      overflow-x: hidden;
      border-radius: 10px; 
      padding: 25px;
      background: #0f0f0f;
      ::-webkit-scrollbar {
         width: 0;
      }
      @media (max-width: 900px) {
         width: 95%;
      }
   }
`;

export const SettingsModalContent = styled.div`
   .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      .title {
         color: #927CD9;
         font-weight: 500;
         font-size: 30px;
      }
      .MuiIconButton-root {
         background: #222;
         :hover {
               background: #333;
               svg path {
                  fill: #FFFFFF;
               }
         }
         svg {
               path {
                  fill: #9a9a9a;
               }
         }
      }
   }
   .description {
      color: #9a9a9a;
      /* font-size: 14px; */
      margin: 10px 0;
   }
   .missing-infos-title {
      color: #927CD9;
      font-weight: 500;
      text-align: center;
      margin-bottom: 20px;
      b {
         font-size: 30px;
      }
   }
   .missing-infos {
      /* display: flex;
      flex-wrap: wrap; */
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px 30px;
      margin-bottom: 25px;
      .info {
         all: unset;
         display: flex;
         flex-direction: column;
         align-items: center;
         border-radius: 10px;
         padding: 20px;
         cursor: pointer;
         background-color: #222;
         :hover {
            background-color: #444;
         }
         .MuiSvgIcon-root {
            font-size: 50px;
            path {
               fill: #c9c9c9;
               /* fill: #927CD9; */
            }
         }
         &__title {
            color: #c9c9c9;
            /* color: #927CD9; */
            font-weight: 500;
         }
         &__description {
            color: #9a9a9a;
            font-size: 14px;
            text-align: center;
         }  
      }
   }
   .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .MuiFormControlLabel-root {
         .MuiCheckbox-root {
            color: #c9c9c9;
            &.Mui-checked {
               color: #927CD9;
            }
         }
         .MuiTypography-root {
            color: #c9c9c9;
            font-size: 14px;
         }
      }
      .button-group {
         display: flex;
         align-items: center;
         gap: 10px;
         button {
            font-size: 14px;
            transition: padding 350ms;
            :hover {
               padding: 10px 25px;
            }
            &.remind-me-later {
               background: #222;
            }
         }
      }
   }

   @media (max-width: 900px) {
      .footer {
         flex-direction: column;
         align-items: flex-start;
         .button-group {
            width: 100%;
            margin-top: 10px;
            button {
               flex: 1;
            }
         }
      }
   }
   @media (max-width: 600px) {
      .header {
         .title {
            font-size: 25px;
         }
         .MuiIconButton-root {
            position: absolute;
            top: -15px;
            right: 5px;
         }
      }
      .description {
         font-size: 14px;
      }
      .missing-infos-title {
         font-size: 20px;
         b {
            font-size: 25px;
         }
      }
      .missing-infos {
         grid-template-columns: 1fr;
      }
   }
`;