import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../api/http';
import { AxiosError } from 'axios';

//Get project info
export const fetchProjectInfo = createAsyncThunk(
  'projects/fetchProjectInfo',
  async (projId: string, { rejectWithValue }) => {
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
    { projId, colId }: { projId: string; colId: number },
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
