import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { instance } from '../../../../api/instance';

interface reqParam {
  projId: number;
  isFav: boolean;
}

// Favorite toggle for projects
export const favProjectsThunk = createAsyncThunk(
  'projects/setFavourite',
  async (data: reqParam, thunkAPI) => {
    const { projId, isFav } = data;
    try {
      await instance.patch(`projects/${projId}`, [
        {
          op: 'UPDATE',
          key: 'isFavourite',
          value: isFav,
        },
      ]);
      return {
        projId,
        isFav,
      };
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
