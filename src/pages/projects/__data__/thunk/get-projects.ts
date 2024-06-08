import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProject } from '../type/projects.type';
import { AxiosError } from 'axios';
import { instance } from '../../../../api/instance';

// Get all projects
export const getProjectsThunk = createAsyncThunk(
  'projects/getAllProjects',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/projects');

      if (response.status === 200) {
        return response.data as IProject[];
      } else {
        return [];
      }
    } catch (err) {
      const error: AxiosError = err;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
