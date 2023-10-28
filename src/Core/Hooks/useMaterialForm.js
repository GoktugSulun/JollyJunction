import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const useMaterialForm = ({ defaultValues, schema, mode='onSubmit', reValidateMode='onChange' }) => {
  const materialForm = useForm({
    defaultValues,
    ...(schema ? {resolver: yupResolver(schema)} : {}),
    mode,
    reValidateMode
  });

  return {
    form: materialForm,
    registerHandler: (name) => ({
      control: materialForm.control,
      name,
    }),
  };
};

export default useMaterialForm;