import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Elevation, Icon, Intent } from '@blueprintjs/core';

import styles from './styles.module.scss';
import { IClasstoom } from '../../models';

const ClassroomItem: FC<IClasstoom> = ({ ID, Name, Description }) => (
  <Card elevation={Elevation.ONE} className={styles.root}>
    <Link to={`/cabinet/classrooms/${ID}`}>
      <h3>
        <Icon icon="endorsed" intent={Intent.PRIMARY} className={styles.titleIcon} />
        {Name}
      </h3>
    </Link>

    <div>{Description}</div>
  </Card>
);

export default ClassroomItem;
