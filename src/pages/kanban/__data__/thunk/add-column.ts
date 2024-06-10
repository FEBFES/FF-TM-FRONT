import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  name: string;
  description: string;
  projId: string;
}

// Create new column
export const fetchAddNewCol = createAsyncThunk(
  'projects/fetchAddNewCol',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId, name, description } = reqData;
      const res = await instance.post(`projects/${projId}/columns`, {
        name,
        description,
        columnOrder: 0,
      });

      return res.data;
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
