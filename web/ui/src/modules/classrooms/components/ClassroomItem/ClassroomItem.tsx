import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IClasstoom } from '../../models';

import AlarmIcon from '../../../../theme/icons/alarm.svg';

const ClassroomItem: FC<IClasstoom> = ({ ID, Name, Description }) => (
  <div>
    <Link to={`/cabinet/classrooms/${ID}`}>
      <h3>{Name}</h3>
    </Link>
    <img src={AlarmIcon} width={20} height={20} />
    
    

  <div>{Description}</div>
  </div>
);

export default ClassroomItem;
