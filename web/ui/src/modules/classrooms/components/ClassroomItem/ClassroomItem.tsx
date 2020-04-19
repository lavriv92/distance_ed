import React, { FunctionComponent } from 'react';
import { Card, Elevation, Icon, Intent } from '@blueprintjs/core';

import styles from './styles.module.scss';

type ClassroomItemProps = {
  Name: string;
  Description: string;
};

const ClassroomItem: FunctionComponent<ClassroomItemProps> = ({ Name, Description }) => (
  <Card elevation={Elevation.ONE} className={styles.root}>
    <h3>
      <Icon icon="endorsed" intent={Intent.PRIMARY} className={styles.titleIcon} />
      {Name}
    </h3>

    <div>{Description}</div>
  </Card>
);

export default ClassroomItem;
