import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../api/http';
import { addToast } from '../../../store/slices/AppSlice';
import { v4 } from 'uuid';
import { IRegisterFormDataType } from './auth.type';

// Registration
export const fetchRegistration = createAsyncThunk(
  'projects/fetchRegistration',
  async (formData: IRegisterFormDataType, { rejectWithValue, dispatch }) => {
    try {
      const res = await instance.post('/auth/register', formData);

      if (res.status === 200) {
        return res.data.token;
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
