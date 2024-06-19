import { instance } from '../../../../api/instance';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IReqData {
  projId: number;
  colId: number;
}

// Delete column
export const deleteColThunk = createAsyncThunk(
  'projects/fetchDelCol',
  async (reqData: IReqData, { rejectWithValue }) => {
    try {
      const { projId, colId } = reqData;
      const response = await instance.delete(
        `projects/${projId}/columns/${colId}`
      );

      if (response.status === 200) {
        return colId;
      }
      return rejectWithValue('Ошибка');
    } catch (err) {
      return rejectWithValue('Ошибка');
    }
  }
);
