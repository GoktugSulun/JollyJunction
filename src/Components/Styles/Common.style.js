import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const CustomIconButton = styled(IconButton)`
    svg {
        font-size: ${(props) => props.fontSize || 'initial'};
        path {
            fill: #c9c9c9;
        }
    }
    :hover {
        background-color: #333;
    }
`;