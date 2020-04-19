import React from 'react';

import ClassroomItem from '../ClassroomItem';

import styles from './styles.module.scss';

const ClassroomsList = ({ classrooms }) => {
  return <div className={styles.root}>
    <h2 className={styles.title}>Мої класи</h2>

    <div>{classrooms.map(c => <ClassroomItem {...c} />)}</div>
  </div>;
};

export default ClassroomsList;