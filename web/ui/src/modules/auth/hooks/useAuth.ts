import { useHistory } from 'react-router-dom';

import { useLocalStorage } from '../../shared/hooks';

import * as api from '../api';

import ISignInData from '../../../interfaces/ISignInData';
import ISignResponse from '../../../interfaces/ISignInResponse';
import { useToast } from '../../toast/hooks';

const useAuth = () => {
  const [token, setToken, removeToken] = useLocalStorage('authToken');
  const history = useHistory();
  const toast = useToast();

  const signIn = async (signInData: ISignInData): Promise<void> => {
    try {
      const userData: ISignResponse = await api.signIn(signInData);
      setToken(userData.token);
      history.replace('/cabinet');
    } catch (err) {
      toast.danger('Error when sign in');
    }
  };

  const signOut = () => {
    removeToken();
    history.replace('/auth/sign-in');
  };

  return { isAuthenticated: !!token, signIn, signOut };
};

export default useAuth;
