import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Loading = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${(props) => props.fullWidth || 'auto'};
   height: auto;
   margin: ${(props) => props.margin};
   ${(props) => props.blur && css`
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: inherit;
      z-index: 99;
      /* filter: blur(10px);
      background-color: rgba(255, 255, 255, .3); */
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
   `}
   .MuiCircularProgress-root svg circle {
      stroke: ${(props) => props.color};
   }
`;