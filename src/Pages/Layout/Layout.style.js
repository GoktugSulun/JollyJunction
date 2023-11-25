import styled from '@emotion/styled';
import { ContentWrapper } from '../../Core/Components/Pages/ContentWrapper.style';

export const Layout = styled(ContentWrapper)``;

export const ProfileWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 25px;

   @media (max-width: 900px) {
      margin-bottom: 25px;
   }
`;