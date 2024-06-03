import { AxiosResponse } from "axios";
import { instance } from "../../../../api/instance";

interface IRequestParam {
  name: string;
  description: string;
}

// Add new projects
export const addProjectRequest = async ({
  name,
  description,
}: IRequestParam): Promise<AxiosResponse<IResponseParam>> => {
  return instance.request({
    method: "POST",
    url: "projects",
    data: {
      name,
      description,
    },
  });
};

interface IResponseParam {}
