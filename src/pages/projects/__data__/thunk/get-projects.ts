import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProject } from '../type/projects.type';
import { AxiosError } from 'axios';
import { instance } from '../../../../api/instance';

// Get all projects
export const getProjectsThunk = createAsyncThunk(
  'projects/getAllProjects',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get<IProject[]>('/projects');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
