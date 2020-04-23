import { useContext } from 'react';
import { ToastContext } from '../ToastProvider';
import { ToastType } from '../enums';

const useToast: any = () => {
  const { addToast } = useContext(ToastContext);

  return Object.values(ToastType).reduce((methods, type) => {
    return {
      ...methods,
      [type]: (message: string) => addToast({ type, message })
    };
  }, {});
};

export default useToast;