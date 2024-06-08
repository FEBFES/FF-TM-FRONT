//Delete member from project
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';
import { AxiosError } from 'axios';

export const fetchDeleteMemberFromProject = createAsyncThunk(
  'project/fetchDeleteMemberFromProject',
  async (
    { projId, memberId }: { projId: number; memberId: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.delete(
        `projects/${projId}/members/${memberId}`
      );

      if (res.status === 200) {
        return memberId;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
