import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';
import { AxiosError } from 'axios';

// Create new column
export const fetchAddNewCol = createAsyncThunk(
  'projects/fetchAddNewCol',
  async (
    {
      name,
      description,
      projId,
    }: { name: string; description: string; projId: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.post(`projects/${projId}/columns`, {
        name,
        description,
        columnOrder: 0,
      });

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
