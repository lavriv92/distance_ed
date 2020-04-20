import React, { FC, useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getClassroomDetails } from '../../../modules/classrooms/api';

type ClassroomDetailsParams = {
  id: string;
};

type ClassroomStateProps = {
  Name: string;
  Description: string;
} | null;

const ClassroomDetails: FC<object> = () => {
  const [classroom, setClassroom] = useState<ClassroomStateProps>(null);
  const params = useParams<ClassroomDetailsParams>();

  const fetchClassroom = useCallback(async () => {
    const result = await getClassroomDetails(params.id);
    setClassroom(result.classroom);
  }, [params.id]);

  useEffect(() => {
    fetchClassroom();
  }, [fetchClassroom]);

  return (
    classroom && (
      <div>
        <h2>{classroom.Name}</h2>
        <div>{classroom.Description}</div>
      </div>
    )
  );
};

export default ClassroomDetails;
