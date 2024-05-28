import { AxiosResponse } from 'axios';
import { instance } from '../../../../api/instance';

interface IRequestParam {
  id: number;
}

// Delete projects by id
export const deleteProjectRequest = async ({
  id,
}: IRequestParam): Promise<AxiosResponse<IResponseParam>> => {
  return instance.request({
    method: 'DELETE',
    url: `projects/${id}`,
    data: {
      id,
    },
  });
};

interface IResponseParam {}
