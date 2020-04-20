import React, { useState } from 'react';
import classNames from 'classnames';
import { Card, Button, Classes, Label, FormGroup } from '@blueprintjs/core';

import { useForm } from '../../../modules/shared/hooks';
import { Flex as FlexBox } from '../../../modules/shared/components';

import styles from './SignUp.module.css';
import { api } from '../../../modules/shared/utils';
import { useHistory } from 'react-router-dom';
import { ISignUpData } from '../../../modules/auth/models';

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

  const buttonClassName = classNames(Classes.MINIMAL, Classes.INTENT_SUCCESS, Classes.LARGE);
  const inputClassName = classNames(Classes.INPUT, Classes.LARGE);
  const cardClassName = classNames(styles.root, Classes.SMALL);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      await api.post('/auth/users', values);
      history.replace('/auth/sign-in');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={cardClassName}>
      <h2>Реєстрація</h2>
      <FlexBox>
        <FormGroup inline>
          <Label>
            Електронна адреса <span className={Classes.INTENT_DANGER}>*</span>
            <input
              name="email"
              value={values.email}
              onChange={setValue}
              className={inputClassName}
              placeholder="me@example.com"
            />
          </Label>
          <Label>
            Пароль <span className={Classes.INTENT_DANGER}>*</span>
            <input
              name="password"
              value={values.password}
              onChange={setValue}
              className={inputClassName}
              type="password"
              placeholder="Пароль"
            />
          </Label>
          <Label>
            Повторити пароль <span className={Classes.INTENT_DANGER}>*</span>
            <input
              name="passwordConfirmation"
              value={values.passwordConfirmation}
              onChange={setValue}
              type="password"
              className={inputClassName}
              placeholder="Повторити пароль"
            />
          </Label>
        </FormGroup>
        <FormGroup inline>
          <Label>
            Ім'я
            <input
              name="firstName"
              value={values.firstName}
              onChange={setValue}
              className={inputClassName}
              placeholder="Ім'я"
            />
          </Label>
          <Label>
            Прізвище
            <input
              name="lastName"
              value={values.lastName}
              onChange={setValue}
              className={inputClassName}
              placeholder="Прізвище"
            />
          </Label>
        </FormGroup>
      </FlexBox>
      <Button loading={loading} className={buttonClassName} onClick={handleSubmit}>
        Зареєструватись
      </Button>
    </Card>
  );
};

export default SignUp;
