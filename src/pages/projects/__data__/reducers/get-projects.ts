import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { getProjectsThunk } from "../thunk/get-projects";
import { IProject } from "../type/projects.type";
import { IProjectInitialState } from "./projectsSlice";

export const getProjectsBuilder = (
  builder: ActionReducerMapBuilder<IProjectInitialState>
) => {
  return builder
    .addCase(getProjectsThunk.pending, (state: IProjectInitialState) => {
      state.isLoading = true;
    })
    .addCase(
      getProjectsThunk.fulfilled,
      (state: IProjectInitialState, action: PayloadAction<IProject[]>) => {
        state.isLoading = false;
        state.projectsList = action.payload;
        state.haveFavoriteProjects = action.payload.some(
          (project) => project.isFavourite
        );
      }
    )
    .addCase(getProjectsThunk.rejected, (state: IProjectInitialState) => {
      state.isLoading = false;
    });
};
