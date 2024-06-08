import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';
import { AxiosError } from 'axios';

// Delete task by id
export const fetchDelTask = createAsyncThunk(
  'projects/fetchDelTask',
  async (
    {
      projId,
      colId,
      taskId,
    }: { projId: number; colId: number; taskId: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.delete(
        `projects/${projId}/columns/${colId}/tasks/${taskId}`
      );

      if (res.status === 200) {
        return { colId: colId, taskId: taskId };
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
