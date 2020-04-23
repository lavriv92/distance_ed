import { api } from '../../utils';

export function getClassrooms(): Promise<any> {
  return api.get('/v1/classrooms');
}

export function getClassroomDetails(id: number | string): Promise<any> {
  return api.get(`/v1/classrooms/${id}`);
}
