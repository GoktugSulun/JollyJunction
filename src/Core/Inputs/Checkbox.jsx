import React from 'react';
import { Checkbox } from '@mui/material';
import PropTypes from 'prop-types';
import withInput from '../Utils/withInput';
import _ from 'lodash';
import { CustomFormControlLabel } from './Style/Input.style';

const CheckboxInput = (props) => {

   console.log(props, ' pr');

   const onChangeHandler = (event) => {
      if (!_.isEmpty(props.control)) {
        props.field.onChange(event.target.checked);
      }
      props.onChange(event, event.target.checked);
    };

   const getCheckedValue = () => {
      if (!_.isEmpty(props.control)) {
         return { checked: props.field.value };
      }
      if (props.checked !== null) {
         return { checked: props.checked };
      }
      return {};
   };

   console.log(props.fieldState.error, ' alo');

  return (
   <CustomFormControlLabel 
      error={!!props.fieldState?.error}
      $color={props.$color}
      control={
         <Checkbox
            color={props.fieldState?.error ? 'error' : props.color}
            {...(props.defaultChecked === null ? {} : { defaultChecked: props.defaultChecked })}
         />} 
      label={props.label}
      {...getCheckedValue()}
      onChange={onChangeHandler}
      labelPlacement={props.labelPlacement}
      disabled={props.disabled}
   />
  );
};

export default withInput(CheckboxInput);

CheckboxInput.propTypes = {
   name: PropTypes.string,
   control: PropTypes.object,
   field: PropTypes.object,
   fieldState: PropTypes.object,
   id: PropTypes.string,
   label: PropTypes.string,
   defaultChecked: PropTypes.any,
   checked: PropTypes.any,
   disabled: PropTypes.bool,
   labelPlacement: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
   onChange: PropTypes.func,
   color: PropTypes.oneOf(['default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning']),
   $color: PropTypes.string
 };
 
 CheckboxInput.defaultProps = {
   name: '',
   control: {},
   field: {},
   fieldState: {},
   id: '',
   label: '',
   defaultChecked: null,
   checked: null,
   disabled: false,
   labelPlacement: 'end',
   onChange: () => {},
   color: 'primary',
   $color: '#1976d2'
 };