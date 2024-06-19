import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
  memberId: number;
}

//Delete member from project
export const deleteMemberFromProjectThunk = createAsyncThunk(
  'project/fetchDeleteMemberFromProject',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId, memberId } = reqData;
      const response = await instance.delete(
        `projects/${projId}/members/${memberId}`
      );
      if (response.status === 200) {
        return memberId;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch (err) {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
