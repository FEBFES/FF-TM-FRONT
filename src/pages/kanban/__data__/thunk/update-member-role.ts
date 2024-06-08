//Change member role
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMemberRole } from '../type/kanban.type';
import { instance } from '../../../../api/instance';
import { AxiosError } from 'axios';

export const fetchChangeMemberRole = createAsyncThunk(
  'project/fetchChangeMemberRole',
  async (
    {
      roleName,
      projId,
      userId,
    }: { roleName: IMemberRole; projId: number; userId: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.post(
        `roles/${roleName}/projects/${projId}/users/${userId}/`
      );

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
