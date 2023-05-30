import { createAsyncThunk } from '@reduxjs/toolkit';
import {instance, instanceWithoutToken} from '../../api/http';
import { v4 } from 'uuid';
import { addToast } from '../App/AppSlice';

export const fetchGetUserInfo = createAsyncThunk(
  'projects/fetchGetUserInfo',
  async (userId: any, { rejectWithValue, dispatch }) => {
    try {
      const res = await instance.get(`/users/${userId}`);

      if (res.status === 200) {
        return res.data;
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
