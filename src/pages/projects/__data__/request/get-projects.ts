import { AxiosResponse } from "axios";
import { instance } from "../../../../api/instance";
import { IProject } from "../type/projects.type";

// Get all projects
export const getProjectsRequest = async (): Promise<
  AxiosResponse<IProject[]>
> => {
  return instance.request({
    method: "GET",
    url: "/projects",
  });
};
