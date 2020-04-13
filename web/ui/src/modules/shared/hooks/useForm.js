import { useState } from 'react';

const useForm = (defaultValues = {}, validators = {}) => {
  const [values, setValues] = useState(defaultValues);
  const [errors] = useState({});

  const setValue = (e) => {
    e.persist();

    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return {
    values,
    errors,
    setValue
  };
};

export default useForm;