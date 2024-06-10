import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

interface ReqParams {
  projId: number;
}

//Get project info
export const getProjectInfoThunk = createAsyncThunk(
  'projects/get-project-info',
  async (reqData: ReqParams, { rejectWithValue }) => {
    try {
      const { projId } = reqData;
      const response = await instance.get(`/projects/${projId}`);

      return response.data;
    } catch (err) {
      return rejectWithValue('Ошибка');
    }
  }
);
