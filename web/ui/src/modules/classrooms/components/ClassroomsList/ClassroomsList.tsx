import React, { FC } from 'react';

import ClassroomItem from '../ClassroomItem';

import styles from './styles.module.scss';
import { IClasstoom } from '../../models';
import { Heading } from '../../../../theme/components';

type ClassroomsListProps = {
  classrooms: Array<IClasstoom>;
};

const ClassroomsList: FC<ClassroomsListProps> = ({ classrooms = [] }) => (
  <div className={styles.root}>
    <Heading>Мої класи</Heading>
    <div>
      {classrooms.map((classroom) => (
        <ClassroomItem {...classroom} key={classroom.ID} />
      ))}
    </div>
  </div>
);

export default ClassroomsList;
