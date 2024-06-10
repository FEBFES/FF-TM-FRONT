import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface IReqData {
  projId: number;
}

//Get project members
export const getProjectMembersThunk = createAsyncThunk(
  'projects/getProjectMembers',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId } = reqData;
      const response = await instance.get(`projects/${projId}/members`);

      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
