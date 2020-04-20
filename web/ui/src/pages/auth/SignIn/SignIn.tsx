import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { useForm } from '../../../modules/shared/hooks';
import { AuthContext } from '../../../modules/auth';
import ISignInData from '../../../interfaces/ISignInData';

import { Input, Button } from '../../../theme/components';

const Container = styled.div`
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  color: #16817a;
  font-weight: 300;
`;

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
    <Container>
      <Title>Логін</Title>
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
      <Button disabled={loading} onClick={handleSubmit}>
        Увійти
      </Button>
    </Container>
  );
};

export default SignIn;
