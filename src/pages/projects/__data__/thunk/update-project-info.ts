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
      const response = await instance.put(`projects/${id}`, {
        name,
        description,
      });
      if (response.status === 200) {
        return true;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
