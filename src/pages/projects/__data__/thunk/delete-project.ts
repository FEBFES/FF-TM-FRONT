import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

// Delete project by id
export const deleteProjectThunk = createAsyncThunk(
  'projects/deleteProj',
  async (id: number, thunkAPI) => {
    try {
      const response = await instance.delete(`projects/${id}`);

      if (response.status === 200) {
        return id;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
