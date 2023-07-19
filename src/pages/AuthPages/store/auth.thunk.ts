import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceWithoutToken } from '../../../api/http';
import { ILoginFormType, IRegisterFormDataType } from './auth.type';
import { setUserId } from '../../../store/User/user.slice';

// Registration
export const fetchRegistration = createAsyncThunk(
  'projects/fetchRegistration',
  async (formData: IRegisterFormDataType, { rejectWithValue, dispatch }) => {
    try {
      const res = await instanceWithoutToken.post('/auth/register', formData);

      if (res.status === 200) {
        return res.data.token;
      }
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);

// Login
export const fetchLogin = createAsyncThunk(
  'projects/fetchLogin',
  async (formData: ILoginFormType, { rejectWithValue, dispatch }) => {
    try {
      const res = await instanceWithoutToken.post(
        '/auth/authenticate',
        formData
      );

      if (res.status === 200) {
        dispatch(setUserId(res.data.userId));
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);
