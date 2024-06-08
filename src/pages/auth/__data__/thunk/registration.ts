import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceWithoutToken } from '../../../../api/instance';

interface requestParam {
  email: string;
  username: string;
  password: string;
}

// user registration
export const fetchRegistration = createAsyncThunk(
  'projects/fetchRegistration',
  async (reqData: requestParam, { rejectWithValue }) => {
    try {
      const res = await instanceWithoutToken.post('/auth/register', reqData);

      if (res.status === 200) {
        return reqData;
      }
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);
