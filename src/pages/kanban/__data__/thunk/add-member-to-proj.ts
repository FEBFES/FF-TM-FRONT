import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';
import { AxiosError } from 'axios';

//Add member to project
export const fetchAddMemberToProject = createAsyncThunk(
  'project/fetchAddMemberToProject',
  async (
    { projId, memberIds }: { projId: number; memberIds: number[] },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.post(`projects/${projId}/members`, memberIds);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
