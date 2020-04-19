import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';

import styles from './styles.module.scss';

const ClassroomItem = (props) => <Card elevation={Elevation.ONE} className={styles.root}>
  <h3>{props.Name}</h3>

  <div>{props.Description}</div>
</Card>

export default ClassroomItem;