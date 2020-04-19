import React, { useState, useEffect } from 'react';
import { ClassroomsList } from '../../../modules/classrooms/components';
import { getClassrooms } from '../../../modules/classrooms/api';

const Classrooms = () => {
  const [classrooms, setClassrooms] = useState([]);

  const fetchClassrooms = async () => {
    const result = await getClassrooms();

    setClassrooms(result.classrooms);
  };

  useEffect(() => {
    fetchClassrooms();
  }, []);

  return <ClassroomsList classrooms={classrooms}/>
};

export default Classrooms;