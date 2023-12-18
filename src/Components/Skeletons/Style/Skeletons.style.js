import styled from '@emotion/styled';
import { Post } from '../../../Pages/Dashboard/Style/Dashboard.style';
import { Skeleton } from '@mui/material';

export const CustomSkeleton = styled(Skeleton)`
   background-color: #292828;
   ::after {
      background: linear-gradient(
         90deg,
         transparent,
         rgb(183 176 176 / 4%),
         transparent
      );
   }
`;

export const PostSkeleton = styled(Post)`
   .header {
      display: flex;
      align-items: center;
      justify-content: initial;
      gap: 15px;
      .user {
         display: flex;
         flex-direction: column;
         gap: 10px;
      }
   }
   .body {
      display: flex;
      flex-direction: column;
      gap: 15px;
   }
   .footer {
      display: flex;
      justify-content: space-between;
      &__buttons {
         display: flex;
         gap: 15px;
      }
   }
`;

export const CommentSkeleton = styled.div`
   display: flex;
   gap: 20px;
   .content {
      flex: 1;
      &__header {
         display: flex;
         justify-content: space-between;
         align-items: center;
         .user {
            flex: 1;
            .MuiSkeleton-root:nth-child(1) {
               margin-bottom: 10px;
            }
         }
      }
      &__body {
         margin: 15px 0;
         display: flex;
         flex-direction: column;
         gap: 10px;
      }
      &__footer {
         display: flex;
         gap: 10px;
      }
   }
`;