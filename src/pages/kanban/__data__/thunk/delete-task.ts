import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
  colId: number;
  taskId: number;
}

// Delete task by id
export const fetchDelTask = createAsyncThunk(
  'projects/fetchDelTask',
  async (reqData: IReqData, { rejectWithValue }) => {
    try {
      const { projId, colId, taskId } = reqData;
      await instance.delete(
        `projects/${projId}/columns/${colId}/tasks/${taskId}`
      );
      return { colId: colId, taskId: taskId };
    } catch (err) {
      return rejectWithValue('Ошибка');
    }
  }
);
