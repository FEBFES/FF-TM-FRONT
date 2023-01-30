import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../api/http';
import { AxiosError } from 'axios';

//Get project dashboard
export const fetchProjectDashboard = createAsyncThunk(
  'projects/fetchAllProjectColumns',
  async (projId: string, { rejectWithValue }) => {
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
    }: { name: string; description: string; projId: string; colId: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.post(
        `projects/${projId}/columns/${colId}/tasks`,
        {
          name,
          description,
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

// Delete task by id
export const fetchDelTask = createAsyncThunk(
  'projects/fetchDelTask',
  async (
    {
      projId,
      colId,
      taskId,
    }: { projId: string; colId: number; taskId: number },
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
