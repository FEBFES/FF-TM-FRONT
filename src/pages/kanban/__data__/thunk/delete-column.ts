import { instance } from '../../../../api/instance';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Delete column
export const fetchDelCol = createAsyncThunk(
  'projects/fetchDelCol',
  async (
    { projId, colId }: { projId: number; colId: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.delete(`projects/${projId}/columns/${colId}`);

      if (res.status === 200) {
        return colId;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
