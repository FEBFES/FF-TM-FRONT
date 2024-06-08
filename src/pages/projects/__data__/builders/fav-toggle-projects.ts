import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IProjectInitialState } from '../slices/projectsSlice';
import { favProjectsThunk } from '../thunk/fav-toggle-project';

export const favToggleBuilder = (
  builder: ActionReducerMapBuilder<IProjectInitialState>
) => {
  return builder.addCase(
    favProjectsThunk.fulfilled,
    (state: IProjectInitialState, action) => {
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
