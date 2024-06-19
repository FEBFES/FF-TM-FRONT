import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceWithoutToken } from '../../../../api/instance';

export interface ILoginReqData {
  username: string;
  password: string;
}

interface ILoginResponseData {
  accessToken: string;
  refreshToken: string;
  userId: number;
}

// USER login
export const authThunk = createAsyncThunk(
  'auth/login/thunk',
  async (reqData: ILoginReqData, thunkAPI) => {
    try {
      const response = await instanceWithoutToken.post<ILoginResponseData>(
        '/auth/authenticate',
        reqData
      );
      if (response.status === 200) {
        return response.data;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);

interface IRegistrationReqData {
  email: string;
  username: string;
  password: string;
}

// USER registration
export const registrationThunk = createAsyncThunk(
  'auth/registration/thunk',
  async (reqData: IRegistrationReqData, thunkAPI) => {
    try {
      const response = await instanceWithoutToken.post(
        '/auth/register',
        reqData
      );
      if (response.status === 200) {
        return reqData;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
