import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceWithoutToken } from '../../../../api/instance';

export interface loginRequestParam {
  username: string;
  password: string;
}

interface responseData {
  accessToken: string;
  refreshToken: string;
  userId: number;
}

// login user
export const loginThunk = createAsyncThunk(
  'user/login',
  async (data: loginRequestParam, { rejectWithValue }) => {
    try {
      const res = await instanceWithoutToken.post('/auth/authenticate', data);

      if (res.status === 200) {
        return res.data as responseData;
      }
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);
