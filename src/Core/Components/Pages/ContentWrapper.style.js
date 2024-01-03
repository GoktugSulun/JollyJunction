import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
   width: 100vw;
   overflow-x: hidden;
   height: auto;
   min-height: calc(100vh - 90px);
   background-color: #0f0f0f;
   display: grid;
   grid-template-columns: 1fr 2fr 1fr;
   align-items: start;
   padding: 0 75px;
   margin: 30px 0;
   gap: 50px;
   transition: padding 350ms, gap 350ms;

   @media (max-width: 1536px) {
      padding: 0 40px;
      gap: 35px;
   }
   @media (max-width: 1200px) {
      grid-template-columns: 1fr 2fr;
   }
   @media (max-width: 900px) {
      grid-template-columns: 1fr;
      padding: 0;
      gap: 0;
   }
`;