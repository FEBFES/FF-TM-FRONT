import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
  colId: number;
  taskId: number;
}

// Delete task by id
export const deleteTaskThunk = createAsyncThunk(
  'projects/fetchDelTask',
  async (reqData: IReqData, { rejectWithValue }) => {
    try {
      const { projId, colId, taskId } = reqData;
      const response = await instance.delete(
        `projects/${projId}/columns/${colId}/tasks/${taskId}`
      );
      if (response.status === 200) {
        return { colId: colId, taskId: taskId };
      }
      return rejectWithValue('Ошибка');
    } catch (err) {
      return rejectWithValue('Ошибка');
    }
  }
);
