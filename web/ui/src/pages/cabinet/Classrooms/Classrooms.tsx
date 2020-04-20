import React, { FC, useState, useEffect, useCallback } from 'react';

import { ClassroomsList } from '../../../modules/classrooms/components';
import classroomsAPI from '../../../modules/classrooms';

const Classrooms: FC<object> = () => {
  const [classrooms, setClassrooms] = useState([]);

  const fetchClassrooms = useCallback(async () => {
    const result = await classroomsAPI.api.getClassrooms();

    setClassrooms(result.classrooms);
  }, []);

  useEffect(() => {
    fetchClassrooms();
  }, [fetchClassrooms]);

  return <ClassroomsList classrooms={classrooms} />;
};

export default Classrooms;
