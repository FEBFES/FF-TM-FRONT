import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMemberRole } from '../type/kanban.type';
import { instance } from '../../../../api/instance';

interface IReqData {
  roleName: IMemberRole;
  projId: number;
  userId: number;
}

//Change member role
export const fetchChangeMemberRole = createAsyncThunk(
  'project/fetchChangeMemberRole',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { roleName, projId, userId } = reqData;
      const res = await instance.post(
        `roles/${roleName}/projects/${projId}/users/${userId}/`
      );
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
