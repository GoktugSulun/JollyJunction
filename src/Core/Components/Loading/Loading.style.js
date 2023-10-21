import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Loading = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: auto;
   ${(props) => props.blur && css`
      position: absolute;
      top: 0;
      left: 0;
      border-radius: inherit;
      transform: translate(-50%, -50%);
      background-color: rgba(255, 255, 255, .6);
   `}
   .MuiCircularProgress-root svg circle {
      stroke: ${(props) => props.color};
   }
`;