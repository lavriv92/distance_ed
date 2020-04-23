import React, { useState } from 'react';
import styled from 'styled-components';

import { IToast } from './models';
import { identity } from '../../utils';
import ToastList from './ToastsList';

const ToastWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  z-index: 1;
  top: 10px;
  right: 10px;
  transition: height .5s linear;
`;

export const ToastContext = React.createContext({
  addToast: async (toast: any) => {}
});

const ToastProvider: React.FC<any> = ({ children }) => {
  const [toasts, setToasts] = useState<Array<IToast>>([]);

  const addToast = async (toast: IToast) => {
    const id = identity.ID();
    setToasts([...toasts, { id, ...toast }]);
  };

  const removeToast = (id: string) => {
    const index = toasts.findIndex(e => e.id === id);
    toasts.splice(index, 1);
    setToasts([...toasts]);
  };

  return <ToastContext.Provider value={{ addToast }}>
    {children}
    <ToastWrapper>
      <ToastList toasts={toasts} setToasts={setToasts} onRemove={removeToast} />
    </ToastWrapper>
  </ToastContext.Provider>
};

export default ToastProvider;