import styled from '@emotion/styled';

export const Divider = styled.div`
   width: 100%;
   height: 1px;
   background-color: ${(props) => props.backgroundColor || '#5e5e5e'};
   margin: ${(props) => props.margin || '15px 0'};
`;