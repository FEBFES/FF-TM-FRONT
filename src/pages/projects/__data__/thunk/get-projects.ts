import { AppDispatch } from '../../../../__data__/store';
import ProjectsSlice from '../reducers/projects';
import { getProjectsRequest } from '../request/get-projects';

// Get all projects
export const getProjectsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(ProjectsSlice.actions.setIsLoading(true));
  try {
    const response = await getProjectsRequest();

    if (response.status === 200) {
    }
  } catch (e) {
    //todo обработать ошибку через нотификацию
  }
};
