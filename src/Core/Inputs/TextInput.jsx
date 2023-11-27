import { FormHelperText } from '@mui/material';
import PropTypes from 'prop-types';
import { CustomFormControl, CustomInputLabel, CustomOutlinedInput } from './Style/Input.style';
import withInput from '../Utils/withInput';
import _ from 'lodash';

const TextInput = (props) => {

  const onChangeHandler = (event) => {
    if (!_.isEmpty(props.control)) {
      props.field.onChange(event.target.value);
    }
    props.onChange(event, event.target.value);
  };

  const getValue = () => {
    if (!_.isEmpty(props.control)) {
      return { value: props.field.value };
    }
    if (props.value !== null) {
      return { value: props.value };
    }
    return {};
  };

  return (
    <CustomFormControl 
      fullWidth={props.fullWidth}
      $withLabel={!!props.label}
    >
      <CustomInputLabel 
        shrink
        error={props.error || !!props.fieldState?.error} 
        htmlFor={props.id}
        palette={props.palette}
      >
        {props.label}
      </CustomInputLabel>
      <CustomOutlinedInput
        {...(props.id ? { id: props.id } : {})}
        startAdornment={props.startAdornment}
        endAdornment={props.endAdornment}
        onChange={onChangeHandler}
        onBlur={props.field?.onBlur || props.onBlur} 
        onKeyDown={props.onKeyDown}
        {...getValue()}
        name={props.field?.name || props.name} 
        inputRef={props.field?.ref || props.inputRef} 
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        notched={false}
        error={props.error || !!props.fieldState?.error} 
        color={props.palette.defaultColor}
        palette={props.palette}
      />
      <FormHelperText
        error={props.error || !!props.fieldState?.error} 
      >
        { props.fieldState?.error?.message || props.helperText }
      </FormHelperText>
    </CustomFormControl>
  );
};

export default withInput(TextInput);

TextInput.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object,
  field: PropTypes.object,
  fieldState: PropTypes.object,
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  startAdornment: PropTypes.element,
  endAdornment: PropTypes.element,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.any,
  onKeyDown: PropTypes.func,
  rules: PropTypes.object,
  defaultValue: PropTypes.any,
  palette: PropTypes.object,
  value: PropTypes.any,
  onBlur: PropTypes.func,
  inputRef: PropTypes.any,
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
  name: '',
  control: {},
  field: {},
  fieldState: {},
  id: '',
  fullWidth: false,
  startAdornment: null,
  endAdornment: null,
  placeholder: '',
  label: '',
  helperText: '',
  error: false,
  type: 'text',
  onChange: () => {},
  onKeyDown: () => {},
  rules: {},
  defaultValue: null,
  palette: {
    defaultColor: 'primary',
    inputColor: '#4A329A', // default #1976d2
    labelColor: '', 
    hoverColor: '' // default rgba(0, 0, 0, 0.87)
  },
  value: null,
  onBlur: () => {},
  inputRef: null,
  disabled: false
};