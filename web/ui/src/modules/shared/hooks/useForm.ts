import { useState } from 'react';

const useForm = (defaultValues = {}, validators = {}) => {
  const [values, setValues] = useState<Object>(defaultValues);
  const [errors] = useState({});

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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
