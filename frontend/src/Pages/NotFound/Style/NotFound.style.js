import styled from '@emotion/styled';

export const NotFound = styled.div`
   height: calc(100vh - 90px);
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 15px;
   padding: 10% 50px 0;
   .MuiSvgIcon-root {
      font-size: 60px;
      path, circle {
         fill: #c7c5c5;
      }
   }
   .info-message {
      color: #c7c5c5;
      font-size: 18px;
      text-align: center;
      &__title {
         font-size: 25px;
         display: flex;
         align-items: center;
         gap: 10px;
         margin-top: 20px;
      }
      a {
         color: #927CD9;
         text-decoration: none;
      }
   }
   @media (max-width: 900px) {
      padding: 15% 25px;
      .info-message {
         a {
            display: block;
         }
      }
   }
`;