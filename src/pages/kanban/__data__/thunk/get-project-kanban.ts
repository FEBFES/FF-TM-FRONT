import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

// const checkParams = async (
//   params: { key: string; value: string }[] | null | undefined
// ) => {
//   let paramsUrl = '';
//   if (params) {
//     paramsUrl += '?';
//     for (const filter of params) {
//       paramsUrl += `${filter.key}=${filter.value}&`;
//     }
//   } else {
//     return null;
//   }
//   return paramsUrl;
// };

interface IReqData {
  projId: number;
  params?: { key: string; value: string }[] | null;
}

// Get project dashboard
export const getProjectKanbanThunk = createAsyncThunk(
  'projects/getProjectKanban',
  async (reqData: IReqData, thunkAPI) => {
    try {
      const { projId } = reqData;
      //   const paramsUlr = await checkParams(params);
      const res = await instance.get(`projects/${projId}/dashboard${''}`);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
