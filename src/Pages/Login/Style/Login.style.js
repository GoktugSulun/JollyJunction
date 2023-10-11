import styled from '@emotion/styled';
import { PageWrapper } from '../../../Core/Components/Pages/PageWrapper.style';

export const Login = styled(PageWrapper)`
   display: flex;
   justify-content: center;
   align-items: center;
   background: linear-gradient(to right, #e2e2e2, #c9d6ff);
   .container {
      background: #FFFFFF;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 15px;
      display: flex;
      .sign-in {
         width: 500px;
         padding: 50px 70px;
         display: flex;
         flex-direction: column;
         gap: 25px;
         transition: width 350ms;
         &__title {
            font-weight: 600;
            text-align: center;
            font-size: 35px;
         }
         &__icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            .MuiIconButton-root {
               border: 1px solid #EAEAEA;
               border-radius: 10px;
            }
         }
         &__horizontal-line {
            width: 100%;
            height: 1px;
            background-color: #EAEAEA;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px 0;
         }
         &__or {
            color: grey;
            font-size: 14px;
            padding: 0 10px;
            background-color: #FFFFFF;
         }
         &__forgot-password {
            color: grey;
            font-size: 14px;
         }
         &__button {
            margin-top: 20px;
            position: relative;
         }
         &__sign-up {
            color: grey;
            font-size: 14px;
            text-align: center;
            display: none;
            a {
               color: #4A329A;
               :hover {
                  font-weight: 600;
               }
            }
         }
      }
      .overlay {
         background-color: #4A329A;
         padding: 25px 50px;
         border-radius: 100px 15px 15px 100px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         gap: 20px;
         width: 500px;
         transition: width 600ms, scale 500ms 350ms;
         &__title {
            font-weight: 600;
            color: #FFFFFF;
            font-size: 30px;
         }
         &__description {
            color: #e6e3e3;
            text-align: center;
         }
         &__button {
            border: 1px solid #FFFFFF;
            border-radius: 50px;
            width: 50%;
            transition: all 350ms;
            :hover {
               width: 60%;
               background-color: #FFFFFF;
               color: #4A329A;
               font-weight: 600;
            }
         }
      }
   }
   
   @media (max-width: 1200px) {
      .container {
         .sign-in, .overlay {
            width: 450px;
         }
      }
   }

   @media (max-width: 900px) {
      .container {
         width: 90%;
         .sign-in {
            width: 100%;
            &__sign-up {
               display: block;
            }
         }
         .overlay {
            flex: 0;
            width: 0;
            padding: 0;
            opacity: 0;
            scale: 0;
            visibility: hidden;
            overflow: hidden;
         }
      }
   }

   @media (max-width: 600px) {
      .container {
         width: 95%;
         .sign-in {
            padding: 50px 25px;
         }
      }
   }
`;