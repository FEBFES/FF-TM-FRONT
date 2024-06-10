import { createAsyncThunk } from '@reduxjs/toolkit';
import { IColumns, ITask } from '../../components';
import { instance } from '../../../../api/instance';

interface IReqData {
  curDragTask: ITask;
  col: IColumns;
}

// Change task
export const fetchChangeTask = createAsyncThunk(
  'projects/fetchChangeTask',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { col, curDragTask } = reqData;
      await instance.put(
        `/projects/${col.projectId}/columns/${col.id}/tasks/${curDragTask.id}`,
        {
          ...curDragTask,
          columnId: col.id,
        }
      );
      // dispatch(addTaskToCol({ colId: data.col.id, task: data.curDragTask }));
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
