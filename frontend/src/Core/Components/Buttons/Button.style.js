import styled from '@emotion/styled';
import { Button as MaterialButton } from '@mui/material';
import overridedProps from '../../Helpers/overridedProps';

export const Button = styled(MaterialButton, overridedProps)`
   color: ${(props) => props.$color || '#FFFFFF'};
   background: ${(props) => props.bgColor || '#4A329A'};
   text-transform: unset;
   padding: ${(props) => props.padding || '10px 15px'};
   font-size: ${(props) => props.fontSize || '16px'};
   width: ${(props) => props.fullWidth ? '100%' : (props.width || 'initial')};
   border-radius: ${(props) => props.borderRadius || '10px'};
   border: ${(props) => props.border || 'none'};
   font-weight: ${(props) => props.fontWeight || 500};
   min-width: ${(props) => props.minWidth || '64px'};
   :disabled {
      background-color: #202022;
      color: #7d7c7c;
   }
   :hover {
      color: ${(props) => props.hoverColor || props.$color || '#FFFFFF'};
      background: ${(props) => props.hoverBgColor || props.bgColor || '#4A329A'};
   }
`;