import React, { useContext } from 'react';
import { Menu, MenuItem, Popover } from '@blueprintjs/core';
import Avatar from 'react-avatar';

import { AuthContext } from '../../auth';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const auth = useContext(AuthContext);

  return <Popover className={styles.root}>
    <div>
      <Avatar name="Ivan Lavriv" size={40} round="40px" />
      <span className={styles.name}>Ivan Lavriv</span>
    </div>
    <Menu>
      <MenuItem icon="user" text="Мій кабінет" />
      <MenuItem icon="id-number" text="Мій Профіль" />
      <MenuItem icon="settings" text="Мої Налаштування" />
      <Menu.Divider />
      <MenuItem icon="log-out" onClick={auth.signOut} text="Вийти" />
    </Menu>
  </Popover>;
};

export default UserMenu;