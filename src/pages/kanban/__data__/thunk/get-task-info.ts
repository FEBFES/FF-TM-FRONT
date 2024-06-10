import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
  colId: number;
  taskId: number;
}

// Get task info
export const getTaskInfoThunk = createAsyncThunk(
  'projects/getTaskInfo',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId, colId, taskId } = reqData;
      const res = await instance.get(
        `/projects/${projId}/columns/${colId}/tasks/${taskId}`
      );
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
