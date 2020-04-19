import { api } from "../shared/utils";

export function getClassrooms() {
  return api.get('/v1/classrooms');
}