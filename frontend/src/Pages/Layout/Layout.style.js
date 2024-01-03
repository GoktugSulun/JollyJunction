import styled from '@emotion/styled';
import { ContentWrapper } from '../../Core/Components/Pages/ContentWrapper.style';

export const Layout = styled(ContentWrapper)``;

export const ProfileWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 25px;
   position: sticky;
   top: 120px;
   max-height: calc(100vh - 60px - 90px);
   overflow-x: hidden;
   overflow-y: auto;

   ::-webkit-scrollbar {
      width: 3px;
   }

   @media (max-width: 1200px) {
      padding-right: 5px;
   }

   @media (max-width: 900px) {
      /* position: static;
      max-height: initial;
      margin-bottom: 25px; */
      display: none;
   }
`;
export const SidebarWrapper = styled.div`
   position: sticky;
   top: 120px;
`;