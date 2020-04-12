import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Card, Label, Classes, Button } from '@blueprintjs/core';

import { useForm } from '../../../modules/shared/hooks';
import { AuthContext } from '../../../modules/auth';

import styles from './SignIn.module.css';

const SignIn = () => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  

  const { values, setValue } = useForm({
    email: '',
    password: ''
  }, {
    email: [],
    password: []
  });

  const buttonClassName = classNames(Classes.MINIMAL, Classes.INTENT_SUCCESS, Classes.LARGE);
  const inputClassName = classNames(Classes.INPUT, Classes.LARGE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await auth.signIn(values);
    } catch(err) {
      console.log('Err', err);
    } finally {
      setLoading(false);
    }
  };

  return <Card className={styles.root}>
    <h2>Увійти</h2>

    <div>
      <Label>
        Електронна адреса<span>*</span>
        <input className={inputClassName} value={values.email} name="email" onChange={setValue} placeholder="me@example.com" />
      </Label>
      <Label>
        Пароль<span>*</span>
        <input className={inputClassName} value={values.password} name="password" onChange={setValue} type="password" placeholder="Введіть свій пароль" />
      </Label>
    </div>
    <Button loading={loading} className={buttonClassName} onClick={handleSubmit}>Увійти</Button>
  </Card>
};

export default SignIn;