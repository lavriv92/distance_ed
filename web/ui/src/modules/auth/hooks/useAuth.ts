import { useHistory } from 'react-router-dom';
import { Toaster, Intent, Position } from '@blueprintjs/core';

import { api } from '../../shared/utils';
import { useLocalStorage } from '../../shared/hooks';

import ISignInData from '../../../interfaces/ISignInData';
import ISignResponse from '../../../interfaces/ISignInResponse';

const useAuth = () => {
  const [token, setToken, removeToken] = useLocalStorage('authToken');
  const history = useHistory();

  const handleError = () =>
    Toaster.create({
      position: Position.TOP_RIGHT,
    }).show({
      intent: Intent.DANGER,
      icon: 'error',
      message: 'Не вдалося авторизуватись',
    });

  const signIn = async (signInData: ISignInData): Promise<void> => {
    try {
      const userData: ISignResponse = await api.post('/auth/token', signInData);
      setToken(userData.token);
      history.replace('/cabinet');
    } catch (err) {
      handleError();
    }
  };

  const signOut = () => {
    removeToken();
    history.replace('/auth/sign-in');
  };

  return { isAuthenticated: !!token, signIn, signOut };
};

export default useAuth;
