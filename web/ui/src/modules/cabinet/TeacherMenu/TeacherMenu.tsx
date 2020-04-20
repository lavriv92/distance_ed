import React from 'react';
import classNames from 'classnames';
import { Menu, Classes, Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const TeacherMenu: React.FC<{}> = () => {
  const menuItemLinkClassname = classNames(Classes.MENU_ITEM, styles.menuItem);
  const menuLabelClassname = classNames(Classes.MENU_ITEM_LABEL, styles.menuItem);

  return (
    <Menu large className={styles.root}>
      <h3 className={styles.title}>Меню</h3>

      <Link className={menuItemLinkClassname} to="/cabinet/classrooms">
        <Icon icon="projects" />
        <span className={menuLabelClassname}>Мої класи</span>
      </Link>
      <Link className={Classes.MENU_ITEM} to="/cabinet/materials">
        <Icon icon="document" />
        <span className={Classes.MENU_ITEM_LABEL}>Мої матеріали</span>
      </Link>
      <Link className={Classes.MENU_ITEM} to="/cabinet/schedule">
        <Icon icon="timeline-events" />
        <span className={Classes.MENU_ITEM_LABEL}>Мій розклад</span>
      </Link>
    </Menu>
  );
};

export default TeacherMenu;
