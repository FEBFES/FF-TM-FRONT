import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

// Delete project by id
export const deleteProjectThunk = createAsyncThunk(
  'projects/deleteProj',
  async (id: number, thunkAPI) => {
    try {
      await instance.delete(`projects/${id}`);
      return id;
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
