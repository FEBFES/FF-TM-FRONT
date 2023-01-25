import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../api/http';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue, getState }) => {
    try {
      const res = await instance.get('projects');

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      //todo
      // if (err) return rejectWithValue(err.message)
    }
  }
);
