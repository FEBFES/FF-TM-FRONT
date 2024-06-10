import { instance } from '../../../../api/instance';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IReqData {
  projId: number;
  colId: number;
}

// Delete column
export const fetchDelCol = createAsyncThunk(
  'projects/fetchDelCol',
  async (reqData: IReqData, { rejectWithValue }) => {
    try {
      const { projId, colId } = reqData;
      await instance.delete(`projects/${projId}/columns/${colId}`);
      return colId;
    } catch (err) {
      return rejectWithValue('Ошибка');
    }
  }
);
