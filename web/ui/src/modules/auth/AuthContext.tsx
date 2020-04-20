import React, { createContext, FC } from 'react';

import useAuth from './hooks/useAuth';
import ISignInData from '../../interfaces/ISignInData';

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (signInData: ISignInData) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  signIn: (signInData: ISignInData) => Promise.resolve(),
  signOut: () => {},
});

const AuthProvider: FC<React.ComponentProps<any>> = ({ children }) => {
  const authValue = useAuth();

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
