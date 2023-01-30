import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchAddProject,
  fetchDelProject,
  fetchProjects,
} from './projects.thunk';
import { IProject } from './projects.type';

interface IProjectInitialState {
  projects: IProject[];
  isLoad: boolean;
  error: string | null;
}

const projectInitialState: IProjectInitialState = {
  projects: [],
  isLoad: false,
  error: null,
};

const ProjectsSlice = createSlice({
  name: 'projects',
  initialState: projectInitialState,
  reducers: {},
  extraReducers: (builder) => {
    //
    // Getting a list of user's projects
    //
    builder.addCase(fetchProjects.pending, (state, action) => {
      state.isLoad = true;
      state.error = null;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.isLoad = false;
    });
    //
    // Add new project
    //
    builder.addCase(fetchAddProject.fulfilled, (state, action) => {
      state.projects.push(action.payload);
    });
    //todo - add pending
    //
    // Delete projects
    //
    builder.addCase(fetchDelProject.fulfilled, (state, action) => {
      state.projects = state.projects.filter((el) => el.id !== action.payload);
    });
    //todo - add pending
    builder.addMatcher(
      (action: AnyAction) => {
        return action.type.endsWith('rejected');
      },
      (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoad = false;
      }
    );
  },
});

// export {} = ProjectsSlice.actions
export default ProjectsSlice.reducer;
