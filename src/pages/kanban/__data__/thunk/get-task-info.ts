import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

// Get task info
export const getTaskInfoThunk = createAsyncThunk<{ str: string }>(
  'projects/getTaskInfo',
  async ({ projId, colId, taskId }: any, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `/projects/${projId}/columns/${colId}/tasks/${taskId}`
      );
      if (res.status === 200) {
        return res.data;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
