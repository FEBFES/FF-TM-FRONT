import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProject } from "../type/projects.type";
import { getProjectsBuilder } from "./get-projects";
import { deleteProjectBuilder } from "./delete-project";
import { favToggleBuilder } from "./fav-toggle-projects";

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
  name: "projects",
  initialState: projectInitialState,
  reducers: {},
  extraReducers: (builder) => {
    getProjectsBuilder(builder);
    deleteProjectBuilder(builder);
    favToggleBuilder(builder);
  },
});

export default ProjectsSlice;
