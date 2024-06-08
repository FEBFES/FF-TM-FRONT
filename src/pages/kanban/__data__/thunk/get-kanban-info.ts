// //Get project dashboard
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

export const fetchProjectDashboard = createAsyncThunk(
  'projects/fetchAllProjectColumns',
  async (
    {
      projId,
      params,
    }: { projId: number; params?: { key: string; value: string }[] | null },
    { rejectWithValue, dispatch }
  ) => {
    try {
      //   const paramsUlr = await checkParams(params);
      const res = await instance.get(`projects/${projId}/dashboard${''}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
