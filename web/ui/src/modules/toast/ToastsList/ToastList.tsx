import React, { useEffect } from 'react';
import { IToast } from '../models';
import Toast from '../Toast';

const DEFAULT_DELAY = 2000;

type ToastProps = {
  toasts: Array<IToast>,
  onRemove: (id: string) => void
  setToasts: (toasts: Array<IToast>) => void
};

const ToastList: React.FC<ToastProps> = ({ toasts, setToasts, onRemove }) => {
  const copiedToasts = [...toasts];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copiedToasts.length) {
        copiedToasts.shift();
        setToasts(copiedToasts);
      }
    }, DEFAULT_DELAY);

    return () => clearTimeout(timeout);
  }, [toasts, setToasts, copiedToasts]);

  return (
    <>{toasts.map((toast) => <Toast {...toast} key={toast.id} onRemove={onRemove} />)}</>
  )
};

export default ToastList;