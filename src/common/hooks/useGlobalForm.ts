import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';

export const useGlobalForm = <T extends FieldValues>(schema: any, defaultValues?: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm<T>({
    defaultValues: {
      ...defaultValues,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return {
    register,
    reset,
    handleSubmit,
    errors,
    setError,
    control,
  };
};
