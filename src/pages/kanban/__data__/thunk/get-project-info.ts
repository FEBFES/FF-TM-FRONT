import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';
import { AxiosResponse } from 'axios';
import { IMember } from '../type/kanban.type';
import { IProject } from '../../../projects/__data__/type/projects.type';

interface ReqParams {
  projId: number;
}

//Get project info
export const getProjectInfoThunk = createAsyncThunk(
  'projects/get-project-info',
  async ({ projId }: ReqParams, { rejectWithValue }) => {
    try {
      const res = await instance.get(`/projects/${projId}`);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);
