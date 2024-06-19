import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/instance';

// Delete user Avatar
export const fetchDeleteUserAvatar = createAsyncThunk(
  'projects/fetchDeleteUserAvatar',
  async (userId: any, thunkAPI) => {
    try {
      const res = await instance.delete(`files/user-pic/${userId}`);
      if (res.status === 200) {
        // dispatch(setUserPic(null));
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);

// Set new user Avatar
export const fetchUploadNewUserAvatar = createAsyncThunk(
  'projects/fetchUploadNewUserAvatar',
  async ({ userId, userPic, formData }: any, thunkAPI) => {
    try {
      if (!!userPic) {
        // await dispatch(fetchDeleteUserAvatar(userId));
      }

      const response = await instance.post(
        `files/user-pic/${userId}`,
        formData
      );

      if (response.status === 200) {
        // dispatch(setUserPic(res.data.fileUrn));
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
