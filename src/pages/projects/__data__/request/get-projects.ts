import { AxiosResponse } from 'axios';
import { instance } from '../../../../api/instance';

interface IRequestParam {
  //todo change
  data: any;
}

// Get all projects
//todo добавить возвращаемый тип (вместо any)
export const getProjectsRequest = async ({
  data,
}: IRequestParam): Promise<AxiosResponse<IResponseParam>> => {
  return instance.request({
    method: 'GET',
    url: '/projects',
    data: data,
  });
};

interface IResponseParam {
  //todo change
  str: string;
}
