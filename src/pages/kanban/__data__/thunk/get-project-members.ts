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
      if (response.status === 200) {
        return response.data;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
