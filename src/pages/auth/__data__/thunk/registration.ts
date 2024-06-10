import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceWithoutToken } from '../../../../api/instance';

interface IReqData {
  email: string;
  username: string;
  password: string;
}

// user registration
export const fetchRegistration = createAsyncThunk(
  'projects/fetchRegistration',
  async (reqData: IReqData, thunkAPI) => {
    try {
      await instanceWithoutToken.post('/auth/register', reqData);
      return reqData;
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
