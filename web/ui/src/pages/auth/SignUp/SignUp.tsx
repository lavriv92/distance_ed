import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useForm } from '../../../modules/shared/hooks';
import ISignUpData from '../../../interfaces/ISignUpData';
import { signUp } from '../../../modules/auth/api';

import { Heading, Input, Button, FormGroup } from '../../../theme/components';

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const { values, setValue } = useForm<ISignUpData>(
    {
      email: '',
      password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: '',
    },
    {
      email: [],
      passwordConfirmation: [],
      password: [],
      firstName: [],
      lastName: [],
    },
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signUp(values);
      history.replace('/auth/sign-in');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Heading centered>Реєстрація</Heading>
      <FormGroup>
        <Input
          name="email"
          value={values.email}
          onChange={setValue}
          placeholder="me@example.com"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="password"
          value={values.password}
          onChange={setValue}
          type="password"
          placeholder="Пароль"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="passwordConfirmation"
          value={values.passwordConfirmation}
          onChange={setValue}
          type="password"
          placeholder="Повторити пароль"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="firstName"
          value={values.firstName}
          onChange={setValue}
          placeholder="Ім'я"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="lastName"
          value={values.lastName}
          onChange={setValue}
          placeholder="Прізвище"
        />
      </FormGroup>
      <Button primary disabled={loading} onClick={handleSubmit}>
        Зареєструватись
      </Button>
    </>
  );
};

export default SignUp;
