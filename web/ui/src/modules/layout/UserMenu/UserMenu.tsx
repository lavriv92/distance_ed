import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Icon, Classes } from '@blueprintjs/core';
import Avatar from 'react-avatar';

import { AuthContext } from '../../auth';

import styles from './styles.module.scss';
import { Popover } from '../../../theme/components';

const UserMenu = () => {
  const auth = useContext(AuthContext);

  return (
    <Popover>
      <div>
        <Avatar name="Ivan Lavriv" size="40" round="40px" />
        <span className={styles.name}>Ivan Lavriv</span>
      </div>
      <div>
        <Link className={Classes.MENU_ITEM} to="/cabinet/classrooms">
          <Icon icon="user" />
          <span className={Classes.MENU_ITEM_LABEL}>Мій кабінет</span>
        </Link>
        <Link className={Classes.MENU_ITEM} to="/profile">
          <Icon icon="id-number" />
          <span className={Classes.MENU_ITEM_LABEL}>Мій Профіль</span>
        </Link>
        <Link className={Classes.MENU_ITEM} to="/settings">
          <Icon icon="settings" />
          <span className={Classes.MENU_ITEM_LABEL}>Мої Налаштування</span>
        </Link>
        
        <Link to="/auth/sign-in" onClick={auth.signOut}>
          Вийти
        </Link>
      </div>
    </Popover>
  );
};

export default UserMenu;
