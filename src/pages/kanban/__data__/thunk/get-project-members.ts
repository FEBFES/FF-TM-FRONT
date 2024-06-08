import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';
import { AxiosError } from 'axios';

//Get project members
export const getProjectMembersThunk = createAsyncThunk(
  'projects/getProjectMembers',
  async ({ projId }: { projId: number }, { rejectWithValue }) => {
    try {
      const res = await instance.get(`projects/${projId}/members`);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
