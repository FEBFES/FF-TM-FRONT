import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IProjectInitialState } from '../slices/projectsSlice';
import { setFavoriteProjectThunk } from '../thunk/fav-toggle-project';

export const favToggleBuilder = (
  builder: ActionReducerMapBuilder<IProjectInitialState>
) => {
  return (
    builder.addCase(
      setFavoriteProjectThunk.fulfilled,
      (state: IProjectInitialState, action) => {
        state.isLoading = false
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
    ),
    builder.addCase(
      setFavoriteProjectThunk.pending, 
      (state, action) => {
        state.isLoading = true
      }
    ),
    builder.addCase(
      setFavoriteProjectThunk.fulfilled,
      (state, action) => {
        state.isLoading = false
      }
    )
  )
};
