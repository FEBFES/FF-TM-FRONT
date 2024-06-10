import { instance } from '../../../../api/instance';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IRequestParam {
  id: number;
  name: string;
  description: string;
}

// Update project info
export const updateProjectInfoThunk = createAsyncThunk(
  '',
  async (data: IRequestParam, thunkAPI) => {
    try {
      const { id, name, description } = data;
      await instance.put(`projects/${id}`, { name, description });
      return true;
    } catch {
      thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
