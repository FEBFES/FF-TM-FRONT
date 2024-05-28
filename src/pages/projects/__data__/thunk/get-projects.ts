import { getProjectsRequest } from '../request/get-projects';

// Get all projects
export const getProjectsThunk = async (data) => {
  try {
    const response = await getProjectsRequest(data);

    if (response.status === 200) {
    }
  } catch (e) {
    //todo обработать ошибку через нотификацию
  }
};
