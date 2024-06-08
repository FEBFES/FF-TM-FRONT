import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProject } from '../type/projects.type';
import { AxiosError } from 'axios';
import { instance } from '../../../../api/instance';

// Delete project by id
export const deleteProjectThunk = createAsyncThunk(
  'projects/deleteProj',
  async (id: number, thunkAPI) => {
    try {
      const response = await instance.delete(`projects/${id}`, {
        data: { id },
      });

      if (response.status === 200) {
        return id;
      } else {
        return null;
      }
    } catch (err) {
      const error: AxiosError = err;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue(error.response.data as AxiosError);
    }
  }
);
