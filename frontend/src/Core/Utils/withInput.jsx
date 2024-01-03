import React from 'react';
import { useController } from 'react-hook-form';

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

const withInput = (WrappedComponent) => {
  return function WithInput(props) {

    if (!props.control){
      // no react-hook-form, normal input
      return (
        <WrappedComponent {...props} />
      );
    }

    const {
      field,
      fieldState,
      // formState: { errors }
    } = useController({
      name: props?.name,
      control: props?.control,
      rules: props?.rules,
      defaultValue: props?.defaultValue
    });

    return (
      <WrappedComponent
        control={props.control}
        field={field}
        fieldState={fieldState}
        {...props}
      />
    );
  };
};

export default withInput;
