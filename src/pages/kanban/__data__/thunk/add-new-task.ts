import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPriorityType, ITypeSelectType } from '../../components';
import { instance } from '../../../../api/instance';
import { AxiosError } from 'axios';

// Add new task
export const fetchAddNewTask = createAsyncThunk(
  'projects/fetchAddNewTask',
  async (
    {
      name,
      description,
      projId,
      colId,
      priority,
      type,
      assigneeId,
    }: {
      name: string;
      description: string;
      projId: number;
      colId: number;
      priority: IPriorityType;
      type: ITypeSelectType;
      assigneeId: number | null | undefined;
    },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const res = await instance.post(
        `projects/${projId}/columns/${colId}/tasks`,
        {
          name,
          description,
          priority: priority !== 'DEFAULT' ? priority : null,
          type: type !== 'NONE' ? type : null,
          assigneeId: assigneeId ? assigneeId : null,
        }
      );

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
