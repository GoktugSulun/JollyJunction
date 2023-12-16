import styled from '@emotion/styled';
import { Post } from '../../../Pages/Dashboard/Style/Dashboard.style';

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
   .MuiSkeleton-root {
      background-color: #292828;
      ::after {
         background: linear-gradient(
          90deg,
          transparent,
          rgb(183 176 176 / 4%),
          transparent
        );
      }
   }
`;