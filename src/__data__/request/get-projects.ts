import { AxiosResponse } from 'axios';
import { instance } from '../../api/http';

interface requestParam {
  url: string;
  data: '';
}

// Список всех проектов //todo добавить возвращаемый тип (вместо any)
export const getProjects = async ({
  url,
  data,
}: requestParam): Promise<AxiosResponse<any>> => {
  return instance.request({
    method: 'GET',
    url: url,
    headers: { 'Content-Type': 'application/json' },
    data: data,
    withCredentials: true,
  });
};
