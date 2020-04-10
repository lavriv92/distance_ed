import React from 'react';
import classNames from 'classnames';
import { Navbar, Alignment, Classes } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  const linkClassName = classNames(Classes.BUTTON, Classes.MINIMAL)

  return <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>
        <Link className={styles.brand} to="/"><strong>DistanceED</strong></Link>
      </Navbar.Heading>
      <Navbar.Divider />
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <Link to="/auth/sign-in" className={linkClassName}>Увійти</Link>
      <Link to="/auth/sign-up" className={linkClassName} >Зареєструватись</Link>
    </Navbar.Group>
  </Navbar>
};

export default Header;