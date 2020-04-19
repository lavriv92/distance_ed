import { useState } from 'react';

const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<any>(window.localStorage.getItem(key));

  const setLocalStorageValue = (value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  const removeValue = () => {
    window.localStorage.removeItem(key);
    setValue(undefined);
  };

  return [value, setLocalStorageValue, removeValue];
};

export default useLocalStorage;
