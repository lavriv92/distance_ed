import React from 'react';
import { Menu, Classes, Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

const TeacherMenu: React.FC<{}> = () => {
  return (
    <Menu large>
      <h3 className={Classes.MENU_HEADER}>Меню</h3>

      <Link className={Classes.MENU_ITEM} to="/cabinet/classrooms">
        <Icon icon="projects" />
        <span className={Classes.MENU_ITEM_LABEL}>Мої класи</span>
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
