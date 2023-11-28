import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { Checkbox, FormControl, FormControlLabel, InputLabel, OutlinedInput, Select } from '@mui/material';
import overridedProps from '../../Helpers/overridedProps';

export const shake = keyframes`
   0% { transform: translateX(0) }
   25% { transform: translateX(10px) }
   50% { transform: translateX(-10px) }
   75% { transform: translateX(10px) }
   100% { transform: translateX(0) }
`;

export const CustomFormControl = styled(FormControl, overridedProps)`
   ${(props) => props.$withLabel && css`
      margin-top: 20px;
   `}
`;

export const CustomInputLabel = styled(InputLabel)`
   transform: translate(0, -20px);
   line-height: 20px;
   font-size: 14px;
   &.Mui-focused:not(.Mui-error) {
      color: ${(props) => props.palette.inputColor || props.palette.defaultColor}
   }
`;

export const getCustomOrDefaultValue = (paletteKey) => (props) => props.palette[paletteKey] && css`border-color: ${props.palette[paletteKey]};`;

export const CustomOutlinedInput = styled(OutlinedInput)`
   &.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline,
   &.Mui-focused:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline,
   &:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline {
      ${getCustomOrDefaultValue('inputColor')}
   }
`;

export const CustomSelectInput = styled(Select)`
   &.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline,
   &.Mui-focused:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline,
   &:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline {
      ${getCustomOrDefaultValue('inputColor')}
   }
`;

export const CustomFormControlLabel = styled(FormControlLabel, overridedProps)`
   color: ${(props) => props.error && '#d32f2f' };
   .MuiCheckbox-root {
      color: ${(props) => props.error && '#d32f2f' };
   }
`;