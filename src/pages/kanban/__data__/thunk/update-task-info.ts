import { createAsyncThunk } from '@reduxjs/toolkit';
import { IColumns, ITask } from '../../components';
import { instance } from '../../../../api/instance';

interface IReqData {
  curDragTask: ITask;
  col: IColumns;
}

// Change task
export const changeTaskThunk = createAsyncThunk(
  'projects/fetchChangeTask',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { col, curDragTask } = reqData;
      const response = await instance.put(
        `/projects/${col.projectId}/columns/${col.id}/tasks/${curDragTask.id}`,
        {
          ...curDragTask,
          columnId: col.id,
        }
      );
      if (response.status === 200) {
        // dispatch(addTaskToCol({ colId: data.col.id, task: data.curDragTask }));
        return;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
