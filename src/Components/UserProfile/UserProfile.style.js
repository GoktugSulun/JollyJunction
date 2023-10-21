import styled from '@emotion/styled';

export const UserProfile = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;
   img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
   }
   .user-info {
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