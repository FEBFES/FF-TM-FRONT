import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMemberRole } from '../type/kanban.type';
import { instance } from '../../../../api/instance';

interface IReqData {
  roleName: IMemberRole;
  projId: number;
  userId: number;
}

//Change member role
export const changeMemberRoleThunk = createAsyncThunk(
  'project/fetchChangeMemberRole',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { roleName, projId, userId } = reqData;
      const response = await instance.post(
        `roles/${roleName}/projects/${projId}/users/${userId}/`
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
