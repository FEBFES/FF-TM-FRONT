// Change task
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IColumns, ITask } from '../../components';
import { instance } from '../../../../api/instance';

export const fetchChangeTask = createAsyncThunk(
  'projects/fetchChangeTask',
  async (
    data: { curDragTask: ITask; col: IColumns },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const res = await instance.put(
        `/projects/${data.col.projectId}/columns/${data.col.id}/tasks/${data.curDragTask.id}`,
        {
          ...data.curDragTask,
          columnId: data.col.id,
        }
      );

      if (res.status === 200) {
        // dispatch(addTaskToCol({ colId: data.col.id, task: data.curDragTask }));
      }
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  }
);
