import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProject } from '../type/projects.type';
import { instance } from '../../../../api/instance';

// Get all projects
export const getProjectsThunk = createAsyncThunk(
  'projects/getAllProjects',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get<IProject[]>('/projects');
      if (response.status === 200) {
        return response.data;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch (err) {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
