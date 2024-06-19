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

      if (response.status === 200) {
        return response.data;
      }
      return rejectWithValue('Ошибка');
    } catch (err) {
      return rejectWithValue('Ошибка');
    }
  }
);
