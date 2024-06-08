import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../../api/instance';

export const fetchUpdateCol = createAsyncThunk(
  'projects/fetchUpdateCol',
  async (
    {
      projId,
      colId,
      newName,
    }: { projId: number; colId: number; newName: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.put(`projects/${projId}/columns/${colId}`, {
        name: newName,
      });

      if (res.status === 200) {
        return {
          colId: colId,
          name: newName,
        };
      }
    } catch (err) {
      return;
    }
  }
);
