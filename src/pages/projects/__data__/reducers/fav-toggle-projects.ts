import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { IProjectInitialState } from "./projectsSlice";
import { favProjectsThunk } from "../thunk/set-favorite-project";

export const favToggleBuilder = (
  builder: ActionReducerMapBuilder<IProjectInitialState>
) => {
  return builder.addCase(
    favProjectsThunk.fulfilled,
    (
      state: IProjectInitialState,
      action: PayloadAction<{ projId: number; isFav: boolean } | null>
    ) => {
      if (action.payload) {
        const { projId, isFav } = action.payload;
        state.projectsList = state.projectsList.map((project) => {
          if (project.id === projId) {
            return {
              ...project,
              isFavourite: isFav,
            };
          }
          return project;
        });
        state.haveFavoriteProjects = state.projectsList.some(
          (proj) => proj.isFavourite
        );
      }
    }
  );
};
