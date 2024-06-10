import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
  memberIds: number[];
}

//Add member to project
export const fetchAddMemberToProject = createAsyncThunk(
  'project/fetchAddMemberToProject',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId, memberIds } = reqData;
      const response = await instance.post(
        `projects/${projId}/members`,
        memberIds
      );
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
