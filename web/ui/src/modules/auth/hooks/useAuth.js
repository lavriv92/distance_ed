
import { useHistory } from 'react-router-dom';

import { api } from '../../shared/utils';
import { useLocalStorage } from '../../shared/hooks';
import { Toaster } from '@blueprintjs/core';

const useAuth = () => {
  const [token, setToken, removeToken] = useLocalStorage('authToken');
  const history = useHistory();

  const signIn = async (signInData) => {
    try {
      const userData = await api.post('/auth/token', signInData);
  
      setToken(userData.token);
      history.replace('/cabinet');
    } catch(err) {
      Toaster.create({
        intent: 'Error'
      }).show();
    }
  }

  const signOut = () => {
    removeToken()
    history.replace('/auth/sign-in');
  };

  return { isAuthenticated: !!token, signIn, signOut };
};

export default useAuth;