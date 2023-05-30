import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/http';
import { v4 } from 'uuid';
import { addToast } from '../App/AppSlice';
import { setUserInfo } from './user.slice';

export const fetchGetUserInfo = createAsyncThunk(
  'projects/fetchGetUserInfo',
  async (userId: any, { rejectWithValue, dispatch }) => {
    try {
      const res = await instance.get(`/users/${userId}`);

      if (res.status === 200) {
        dispatch(setUserInfo(res.data));
      }
    } catch (err) {
      dispatch(
        addToast({
          id: v4(),
          type: 'warning',
          message: err?.response?.data?.message || err.message,
          delay: 3000,
        })
      );
      return rejectWithValue(err as Error);
    }
  }
);
