import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  const signIn = (email, password) => {
    setAuthenticated(true);
    history.replace('/');
  }

  const signOut = () => {
    setAuthenticated(false);
    history.replace('/auth/sign-in');
  };

  return { isAuthenticated, signIn, signOut };
};

export default useAuth;