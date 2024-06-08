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
        } as reqParam;
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
