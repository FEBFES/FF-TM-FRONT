import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
  colId: number;
  newName: string;
}

// Update column
export const updateColumnThunk = createAsyncThunk(
  'projects/fetchUpdateCol',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId, colId, newName } = reqData;
      const response = await instance.put(
        `projects/${projId}/columns/${colId}`,
        {
          name: newName,
        }
      );
      if (response.status === 200) {
        return {
          colId: colId,
          name: newName,
        };
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
