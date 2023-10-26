import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const UserProfile = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;
   .user-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
   }
   .user-info {
      ${(props) => props.justImage && css`
         display: none;
      `}
      &__name {
         color: #c9c9c9;
         font-size: ${(props) => props.small ? '16px' : '18px'};
      }
      &__position {
         margin-top: 2px;
         color: #9d9a9a;
         font-size: ${(props) => props.small ? '12px' : '14px'};
      }
   }
`;