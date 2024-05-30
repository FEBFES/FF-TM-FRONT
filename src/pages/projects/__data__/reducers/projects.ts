import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProject } from '../type/projects.type';

interface IProjectInitialState {
  projectsList: IProject[];
  isLoading: boolean;
  haveFavoriteProjects: boolean;
}

const projectInitialState: IProjectInitialState = {
  projectsList: [],
  isLoading: false,
  haveFavoriteProjects: false,
};

const ProjectsSlice = createSlice({
  name: 'projects',
  initialState: projectInitialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setHaveFavorite: (state, action: PayloadAction<boolean>) => {
      state.haveFavoriteProjects = action.payload;
    },
    setProjects: (state, action: PayloadAction<IProject[]>) => {
      state.projectsList = action.payload;
    },
  },
});

export default ProjectsSlice;
