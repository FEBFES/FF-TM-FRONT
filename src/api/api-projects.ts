import { instance } from './http';
import { serverString } from '../config';

export const apiProjects = {
  getAllProjects: () => {
    return instance.get(`${serverString}/projects`);
  },
};
