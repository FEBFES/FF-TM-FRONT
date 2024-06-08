import { createSlice } from '@reduxjs/toolkit';
import { IProject } from '../type/projects.type';
import { getProjectsBuilder } from '../builders/get-projects';
import { deleteProjectBuilder } from '../builders/delete-project';
import { favToggleBuilder } from '../builders/fav-toggle-projects';

export interface IProjectInitialState {
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
  reducers: {},
  extraReducers: (builder) => {
    getProjectsBuilder(builder);
    deleteProjectBuilder(builder);
    favToggleBuilder(builder);
  },
});

export default ProjectsSlice;
