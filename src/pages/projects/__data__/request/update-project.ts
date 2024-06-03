import { AxiosResponse } from "axios";
import { instance } from "../../../../api/instance";

interface IRequestParam {
  id: number;
  name: string;
  description: string;
}

// Update project info
export const updateProjectsRequest = async ({
  id,
  name,
  description,
}: IRequestParam): Promise<IResponseParam> => {
  return instance.request({
    method: "PUT",
    url: `projects/${id}`,
    data: {
      id,
      name,
      description,
    },
  });
};

interface IResponseParam {}
