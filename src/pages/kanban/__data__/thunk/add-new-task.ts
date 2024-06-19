import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPriorityType, ITypeSelectType } from '../../components';
import { instance } from '../../../../api/instance';

interface IReqData {
  name: string;
  description: string;
  projId: number;
  colId: number;
  priority: IPriorityType;
  type: ITypeSelectType;
  assigneeId: number | null | undefined;
}

// Add new task
export const addNewTaskThunk = createAsyncThunk(
  'projects/fetchAddNewTask',
  //todo change
  async (reqData: IReqData, thunkAPI) => {
    try {
      const response = await instance.post(
        `projects/${reqData.projId}/columns/${reqData.colId}/tasks`,
        {
          name: reqData.name,
          description: reqData.description,
          priority: reqData.priority !== 'DEFAULT' ? reqData.priority : null,
          type: reqData.type !== 'NONE' ? reqData.type : null,
          assigneeId: reqData.assigneeId ? reqData.assigneeId : null,
        }
      );

      if (response.status === 200) {
        return response.data;
      }
      return thunkAPI.rejectWithValue('Ошибка');
    } catch {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
