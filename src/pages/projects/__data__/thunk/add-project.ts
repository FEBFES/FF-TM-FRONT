import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IRequestParam {
  name: string;
  description: string;
}

// Add new project
export const addProjectThunk = createAsyncThunk(
  'projects/addProject',
  async (data: IRequestParam, thunkAPI) => {
    try {
      const response = await instance.post('projects', data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
