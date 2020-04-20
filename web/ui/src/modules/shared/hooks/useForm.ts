import { useState } from 'react';

const useForm = <T extends Object>(defaultValues: T, validators = {}) => {
  const [values, setValues] = useState<T>(defaultValues);
  const [errors] = useState<Object>({});

  const setValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();

    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return {
    values,
    errors,
    setValue,
  };
};

export default useForm;
