import { AxiosResponse } from 'axios';
import { instance } from '../../../../api/instance';

interface IRequestParam {
  projId: number | null;
  isFav: boolean;
}

// Favorite projects toggle
export const favToggleProjectsRequest = async ({
  projId,
  isFav,
}: IRequestParam): Promise<AxiosResponse<IResponseParam>> => {
  return instance.request({
    method: 'PATCH',
    url: `projects/${projId}`,
    data: {
      op: 'UPDATE',
      key: 'isFavourite',
      value: isFav,
    },
  });
};

interface IResponseParam {}
