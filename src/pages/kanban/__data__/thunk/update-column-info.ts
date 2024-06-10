import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
  colId: number;
  newName: string;
}

// Update column
export const fetchUpdateCol = createAsyncThunk(
  'projects/fetchUpdateCol',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId, colId, newName } = reqData;
      await instance.put(`projects/${projId}/columns/${colId}`, {
        name: newName,
      });

      return {
        colId: colId,
        name: newName,
      };
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
