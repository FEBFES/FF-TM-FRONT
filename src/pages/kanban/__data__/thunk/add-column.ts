import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  name: string;
  description: string;
  projId: string;
}

// Create new column
export const addNewColThunk = createAsyncThunk(
  'projects/fetchAddNewCol',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId, name, description } = reqData;
      const response = await instance.post(`projects/${projId}/columns`, {
        name,
        description,
        columnOrder: 0,
      });

      if (response.status === 200) {
        return response.data;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
