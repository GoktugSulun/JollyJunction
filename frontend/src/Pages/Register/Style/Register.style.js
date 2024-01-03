import styled from '@emotion/styled';
import { Login } from '../../Login/Style/Login.style';

export const Register = styled(Login)`
   .container {
      .sign-up {
         padding: 40px 60px;
         width: 600px;
         &__fullname {
            display: flex;
            gap: 20px;
         }
         &__sign-in {
            display: block;
         }
      }
   }

   @media (max-width: 900px) {
      .container {
         .sign-up {
            width: 100%;
         }
      }
   }

   @media (max-width: 600px) {
      .container {
         .sign-up {
            padding: 20px;
            &__fullname {
               display: flex;
               flex-direction: column;
               gap: 25px;
            }
         }
      }
   }
`;