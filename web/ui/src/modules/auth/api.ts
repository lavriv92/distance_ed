import ISignUpData from '../../interfaces/ISignUpData';
import { api } from '../../utils';
import ISignInData from '../../interfaces/ISignInData';

export function signUp(signUpData: ISignUpData): Promise<any> {
  return api.post('/auth/users', signUpData);
}

export function signIn(signInData: ISignInData): Promise<any> {
  return api.post('/auth/token', signInData);
}
