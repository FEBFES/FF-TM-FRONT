import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../api/http';

//Get all project columns
export const fetchAllProjectColumns = createAsyncThunk(
  'projects/fetchAllProjectColumns',
  async (projId: number, { rejectWithValue }) => {
    try {
      const res = await instance.get(`projects/${projId}/getColumns`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);
