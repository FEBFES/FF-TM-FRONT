import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { IProjectInitialState } from "./projectsSlice";
import { deleteProjectThunk } from "../thunk/delete-project";

export const deleteProjectBuilder = (
  builder: ActionReducerMapBuilder<IProjectInitialState>
) => {
  return builder
    .addCase(
      deleteProjectThunk.fulfilled,
      (state: IProjectInitialState, action: PayloadAction<number | null>) => {
        if (action.payload) {
          state.projectsList = state.projectsList.filter(
            (project) => project.id !== action.payload
          );
        }
      }
    )
    .addCase(deleteProjectThunk.rejected, (state, action) => {});
};
