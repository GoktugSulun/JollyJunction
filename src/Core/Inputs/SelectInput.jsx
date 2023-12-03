import { FormHelperText, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import { CustomFormControl, CustomInputLabel, CustomSelectInput } from './Style/Input.style';
import withInput from '../Utils/withInput';
import _ from 'lodash';

const SelectInput = (props) => {

  // if (props.value === null && _.isEmpty(props.control) && props.data.length) {
  //   throw new Error('SelectInput: You passed data prop but missing control or value prop. To fix that, pass the value or spread registerHandler(name) as a prop.');
  // }

  console.log(props.data, ' data');

  const onChangeHandler = (event) => {
    if (!_.isEmpty(props.control)) {
      props.field.onChange(event.target.value);
    }
    props.onChange(event, event.target.value);
  };

  const getValue = () => {
    //* useMaterialForm
    if (!_.isEmpty(props.control)) {
      return { value: props.field.value };
    }
    //* useMaterialForm YOK ama Value prop var
    if (props.value !== null) {
      return { value: props.value };
    }
    //* useMaterialForm YOK & value prop yok && data yok
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
      <CustomSelectInput
        id={props.id}
        {...getValue()}
        startAdornment={props.startAdornment}
        endAdornment={props.endAdornment}
        onChange={onChangeHandler}
        onBlur={props.field?.onBlur || props.onBlur} 
        name={props.field?.name || props.name} 
        inputRef={props.field?.ref || props.inputRef} 
        type={props.type}
        placeholder={props.placeholder}
        notched={false}
        error={props.error || !!props.fieldState?.error} 
        color={props.palette.defaultColor}
        palette={props.palette}
      >
        {
          !!props.emptyValue
              && <MenuItem value=""> <em>{props.emptyValue}</em> </MenuItem>
        }
        {
          props.data.map((obj, index) => (
            <MenuItem key={obj.id || index} value={obj.id}> {obj.name} </MenuItem>
          ))
        }
      </CustomSelectInput>
      <FormHelperText
        error={props.error || !!props.fieldState?.error} 
      >
        { props.fieldState?.error?.message || props.helperText }
      </FormHelperText>
    </CustomFormControl>
  );
};

export default withInput(SelectInput);

SelectInput.propTypes = {
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
  rules: PropTypes.object,
  defaultValue: PropTypes.any,
  palette: PropTypes.object,
  value: PropTypes.any,
  onBlur: PropTypes.func,
  inputRef: PropTypes.any,
  data: PropTypes.array,
  emptyValue: PropTypes.string
};

SelectInput.defaultProps = {
  name: '',
  control: {},
  field: {},
  fieldState: {},
  id: '',
  fullWidth: false,
  startAdornment: null,
  endAdornment: null,
  placeholder: 'deneme',
  label: '',
  helperText: '',
  error: false,
  type: 'text',
  onChange: () => {},
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
  data: [],
  emptyValue: ''
};