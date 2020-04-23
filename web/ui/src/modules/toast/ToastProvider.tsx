import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Toast from './Toast';
import { IToast } from './models';
import { identity } from '../../utils';

const ToastWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  transition: height .5s linear;
`;

export const ToastContext = React.createContext({
  addToast: (toast: any) => {}
});

const ToastProvider: React.FC<any> = ({ children }) => {
  const [toastList, setToastList] = useState<Array<IToast>>([]);

  useEffect(() => {
    console.log('safdsa');
  }, [toastList]);

  const addToast = (toast: IToast) => {
    setToastList([{ id: identity.ID(), ...toast }, ...toastList]);
  };

  const removeToast = (id: string) => {
    const newToasts = toastList.filter(toast => toast.id !== id);
    setToastList(newToasts)
  };

  return <ToastContext.Provider value={{ addToast }}>
    {children}
    <ToastWrapper>
      {toastList.map((toast) => <Toast {...toast} key={toast.id} onRemove={removeToast} />)}
    </ToastWrapper>
  </ToastContext.Provider>
};

export default ToastProvider;