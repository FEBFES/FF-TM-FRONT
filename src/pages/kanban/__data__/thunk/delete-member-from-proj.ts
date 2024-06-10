import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
  memberId: number;
}

//Delete member from project
export const fetchDeleteMemberFromProject = createAsyncThunk(
  'project/fetchDeleteMemberFromProject',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId, memberId } = reqData;
      await instance.delete(`projects/${projId}/members/${memberId}`);
      return memberId;
    } catch (err) {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
