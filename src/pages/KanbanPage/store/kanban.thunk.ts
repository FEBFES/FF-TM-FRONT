import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../api/http';
import { AxiosError } from 'axios';
import { addToast } from '../../../store/slices/AppSlice';
import { v4 } from 'uuid';
import { addTaskToCol } from './kanban.slice';
import { IColumns } from '../components/Column';
import { ITask } from '../components/TaskCard';
import { IPriorityType } from '../components/PrioritySelect/PrioritySelect.type';

// Get task info
export const fetchGetTaskInfo = createAsyncThunk(
  'projects/fetchGetTaskInfo',
  async ({ projId, colId, taskId }: any, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `/projects/${projId}/columns/${colId}/tasks/${taskId}`
      );
      if (res.status === 200) {
        return res.data;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// Change task
export const fetchChangeTask = createAsyncThunk(
  'projects/fetchChangeTask',
  async (
    data: { curDragTask: ITask; col: IColumns },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const res = await instance.put(
        `/projects/${data.col.projectId}/columns/${data.col.id}/tasks/${data.curDragTask.id}`,
        {
          ...data.curDragTask,
          columnId: data.col.id,
        }
      );

      if (res.status === 200) {
        dispatch(addTaskToCol({ colId: data.col.id, task: data.curDragTask }));
      }
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  }
);

//Get project info
export const fetchProjectInfo = createAsyncThunk(
  'projects/fetchProjectInfo',
  async (projId: number, { rejectWithValue }) => {
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

//Get project dashboard
export const fetchProjectDashboard = createAsyncThunk(
  'projects/fetchAllProjectColumns',
  async (projId: number, { rejectWithValue }) => {
    try {
      const res = await instance.get(`projects/${projId}/dashboard`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);

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
    }: {
      name: string;
      description: string;
      projId: number;
      colId: number;
      priority: IPriorityType;
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
        }
      );

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      dispatch(
        addToast({
          type: 'error',
          message: err.message,
          id: v4(),
          delay: 3000,
        })
      );
      return rejectWithValue(err as AxiosError);
    }
  }
);

// Delete task by id
export const fetchDelTask = createAsyncThunk(
  'projects/fetchDelTask',
  async (
    {
      projId,
      colId,
      taskId,
    }: { projId: number; colId: number; taskId: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.delete(
        `projects/${projId}/columns/${colId}/tasks/${taskId}`
      );

      if (res.status === 200) {
        return { colId: colId, taskId: taskId };
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);

// Create new column
export const fetchAddNewCol = createAsyncThunk(
  'projects/fetchAddNewCol',
  async (
    {
      name,
      description,
      projId,
    }: { name: string; description: string; projId: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.post(`projects/${projId}/columns`, {
        name,
        description,
        columnOrder: 0,
      });

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);

// Delete column
export const fetchDelCol = createAsyncThunk(
  'projects/fetchDelCol',
  async (
    { projId, colId }: { projId: number; colId: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.delete(`projects/${projId}/columns/${colId}`);

      if (res.status === 200) {
        return colId;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);
