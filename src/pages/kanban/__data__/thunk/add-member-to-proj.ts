import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
  memberIds: number[];
}

//Add member to project
export const addMemberToProjectThunk = createAsyncThunk(
  'project/fetchAddMemberToProject',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId, memberIds } = reqData;
      const response = await instance.post(
        `projects/${projId}/members`,
        memberIds
      );
      if (response.status === 200) {
        return response.data;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
