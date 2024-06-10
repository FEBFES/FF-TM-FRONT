import { getProjectInfoThunk } from '../thunk/get-project-info';
import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IKanbanInitialState } from '../slices/kanban.slice';
import { IProject } from '../../../projects/__data__/type/projects.type';

export const getProjectInfoBuilder = (
  builder: ActionReducerMapBuilder<IKanbanInitialState>
) => {
  return builder.addCase(getProjectInfoThunk.fulfilled, (state, action) => {
    const { name, description, id, isFavourite, ownerId, members } =
      action.payload;
    state.projectName = name;
    state.projectDesc = description;
    state.projId = id;
    state.ownerId = ownerId;
    state.isFavorite = isFavourite;
    state.members = members;
  });
};
