import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/instance';

export const fetchChangeUserInfo = createAsyncThunk(
  'projects/fetchChangeUserInfo',
  async ({ userId, data }, thunkAPI) => {
    try {
      const response = await instance.put(`users/${userId}`, data);

      if (response.status === 200) {
        return;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
