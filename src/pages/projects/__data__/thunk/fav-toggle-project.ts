import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface reqParam {
  projId: number;
  isFav: boolean;
}

// Favorite toggle for projects
export const setFavoriteProjectThunk = createAsyncThunk(
  'projects/setFavourite',
  async (data: reqParam, thunkAPI) => {
    const { projId, isFav } = data;
    try {
      const response = await instance.patch(`projects/${projId}`, [
        {
          op: 'UPDATE',
          key: 'isFavourite',
          value: isFav,
        },
      ]);
      if (response.status === 200) {
        return {
          projId,
          isFav,
        };
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
