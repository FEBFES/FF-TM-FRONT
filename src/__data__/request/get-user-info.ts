import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/instance';

// Get info about uset
export const fetchUserInfoThunk = createAsyncThunk(
  'projects/fetchGetUserInfo',
  async (userId: number, thunkAPI) => {
    try {
      const response = await instance.get(`/users/${userId}`);

      if (response.status === 200) {
        // dispatch(setUserInfo(res.data));
        return true;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
