import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Loading = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: auto;
   margin: ${(props) => props.margin};
   ${(props) => props.blur && css`
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: inherit;
      background-color: rgba(255, 255, 255, .2);
   `}
   .MuiCircularProgress-root svg circle {
      stroke: ${(props) => props.color};
   }
`;