import { useContext } from 'react';
import { ToastContext } from '../ToastProvider';
import { ToastType } from '../enums';

const useToast = () => {
  const { addToast } = useContext(ToastContext);

  const success = (message: string) => addToast({
    type: ToastType.SUCCESS,
    message
  });

  const info = (message: string) => addToast({
    type: ToastType.INFO,
    message
  });

  const warning = (message: string) => addToast({
    type: ToastType.WARNING,
    message
  });

  const danger = (message: string) => addToast({
    type: ToastType.DANGER,
    message
  });

  return { success, info, warning, danger };
};

export default useToast;