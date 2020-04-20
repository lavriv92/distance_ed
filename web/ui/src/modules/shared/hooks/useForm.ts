import { useState } from 'react';

const useForm = <T>(defaultValues: T, validators = {}) => {
  const [values, setValues] = useState<T>(defaultValues);
  const [errors] = useState({});

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
