import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

export const AuthContext = createContext({
  isAuthenticated: false,
  signIn: () => {},
  signOut: () => {}
});

const AuthProvider = ({ children }) => {
  const authValue = useAuth();

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
};

export default AuthProvider;