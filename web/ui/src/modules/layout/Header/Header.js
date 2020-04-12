import React, { useContext } from 'react';
import classNames from 'classnames';
import { Navbar, Alignment, Classes, Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../auth';

import styles from './Header.module.css';


const Header = () => {
  const auth = useContext(AuthContext)

  const linkClassName = classNames(Classes.BUTTON, Classes.MINIMAL)

  return <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>
        <Link className={styles.brand} to="/"><strong>DistanceED</strong></Link>
      </Navbar.Heading>
      <Navbar.Divider />
    </Navbar.Group>
    {auth.isAuthenticated ? (
      <Navbar.Group align={Alignment.RIGHT}>
        <Button className={linkClassName} onClick={auth.signOut}>Вийти</Button>
      </Navbar.Group>
    ) : (
      <Navbar.Group align={Alignment.RIGHT}>
        <Link to="/auth/sign-in" className={linkClassName}>Увійти</Link>
        <Link to="/auth/sign-up" className={linkClassName} >Зареєструватись</Link>
      </Navbar.Group>
    )}
    
  </Navbar>
};

export default Header;