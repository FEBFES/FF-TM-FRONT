import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceWithoutToken } from '../../../../api/instance';

export interface IReqData {
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
  async (reqData: IReqData, thunkAPI) => {
    try {
      const response = await instanceWithoutToken.post<responseData>(
        '/auth/authenticate',
        reqData
      );
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
