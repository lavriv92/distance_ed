import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IClasstoom } from '../../models';

const ClassroomItem: FC<IClasstoom> = ({ ID, Name, Description }) => (
  <div>
    <Link to={`/cabinet/classrooms/${ID}`}>
      <h3>{Name}</h3>
    </Link>
  <div>{Description}</div>
  </div>
);

export default ClassroomItem;
