import React, { FC } from 'react';

import ClassroomItem from '../ClassroomItem';

import styles from './styles.module.scss';

type ClassroomsListProps = {
  classrooms: Array<ClassroomItemProps>;
};

type ClassroomItemProps = {
  ID: string;
  Name: string;
  Description: string;
};

const ClassroomsList: FC<ClassroomsListProps> = ({ classrooms = [] }) => (
  <div className={styles.root}>
    <h2 className={styles.title}>Мої класи</h2>

    <div>
      {classrooms.map((classroom) => (
        <ClassroomItem {...classroom} key={classroom.ID} />
      ))}
    </div>
  </div>
);

export default ClassroomsList;
