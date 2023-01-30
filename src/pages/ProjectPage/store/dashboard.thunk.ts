import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../api/http';
import { AxiosError } from 'axios';

//Get project dashboard
export const fetchProjectDashboard = createAsyncThunk(
  'projects/fetchAllProjectColumns',
  async (projId: string, { rejectWithValue }) => {
    try {
      const res = await instance.get(`projects/${projId}/dashboard`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
