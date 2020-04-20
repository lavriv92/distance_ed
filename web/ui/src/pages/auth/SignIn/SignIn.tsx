import React, { useContext, useState } from 'react';

import { useForm } from '../../../modules/shared/hooks';
import { AuthContext } from '../../../modules/auth';
import ISignInData from '../../../interfaces/ISignInData';

import { Input, Button, FormGroup, Heading } from '../../../theme/components';

const SignIn = () => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const { values, setValue }: { values: ISignInData; setValue: any } = useForm<ISignInData>(
    {
      email: '',
      password: '',
    },
    {
      email: [],
      password: [],
    },
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await auth.signIn(values);
    } catch (err) {
      console.log('Err', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Heading centered>Логін</Heading>
      <FormGroup>
        <Input
          value={values.email}
          name="email"
          onChange={setValue}
          placeholder="me@example.com"
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="password"
          onChange={setValue}
          type="password"
          placeholder="Введіть свій пароль"
        />
      </FormGroup>
      <Button primary disabled={loading} onClick={handleSubmit}>
        Увійти
      </Button>
    </>
  );
};

export default SignIn;
