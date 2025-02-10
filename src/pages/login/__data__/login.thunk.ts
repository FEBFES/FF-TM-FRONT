import { instanceWithoutToken } from "@/api/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface ILoginReqData {
  username: string;
  password: string;
}

export const fetchLoginThunk = createAsyncThunk(
  'auth/login/thunk',
  async (reqData: ILoginReqData, thunkAPI) => {
    try {
      const response = await instanceWithoutToken.post<ILoginResponseData>(
        '/auth/authenticate',
        reqData
      )
      if (response.status === 200) {
        return response.data;
      }
      return thunkAPI.rejectWithValue(response.statusText)
    } catch {
      return thunkAPI.rejectWithValue('Ошибка')
    }
  }
);

interface ILoginResponseData {
  accessToken: string;
  refreshToken: string;
  userId: number;
}