import styled from '@emotion/styled';

export const LetterImage = styled.div`
   background-color: ${(props) => props.bgColor || 'transparent'};
   border-radius: 50%;
   border: 1px solid ${(props) => props.color || '#FFFFFF'};
   min-width: 60px;
   height: 60px;
   display: flex;
   justify-content: center;
   align-items: center;
   span {
      color: ${(props) => props.color || '#FFFFFF'};
      font-size: ${(props) => props.fontSize};
   }
`;