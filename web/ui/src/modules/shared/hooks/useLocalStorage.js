import { useState } from 'react';

const useLocalStorage = (key) => {
  const [value, setValue] = useState(window.localStorage.getItem(key));

  const  setLocalStorageValue = (value) => {
    window.localStorage.setItem(key, value);
    setValue(value);
  };

  const removeValue = () => {
    window.localStorage.removeItem(key);
    setValue(window.localStorage.key);
  };

  return [ value, setLocalStorageValue, removeValue ];
};

export default useLocalStorage;