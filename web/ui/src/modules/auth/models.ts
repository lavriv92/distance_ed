export interface ISignResponse {
  token: string;
  user: object;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData {
  email: string;
  password: string;
  passwordConfirmation: string;
  firstName?: string;
  lastName?: string;
}

export interface IUser {
  ID: string;
  email: string;
  firstName?: string;
  lastName?: string;
}
