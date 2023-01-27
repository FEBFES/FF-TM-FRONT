import { createSlice } from '@reduxjs/toolkit';
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
  reducers: {
    addCase: (state, action) => {},
  },
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
    builder.addCase(fetchProjects.rejected, (state, action) => {
      //todo state.error = action.payload
      state.error = 'error';
    });
    //
    // Add new project
    //
    builder.addCase(fetchAddProject.fulfilled, (state, action) => {
      state.projects.push(action.payload);
    });
    //todo - add pending and rejected case
    //
    // Delete projects
    //
    builder.addCase(fetchDelProject.fulfilled, (state, action) => {
      state.projects = state.projects.filter((el) => el.id !== action.payload);
    });
    //todo - add pending and rejected case
  },
});

// export {} = ProjectsSlice.actions
export default ProjectsSlice.reducer;
