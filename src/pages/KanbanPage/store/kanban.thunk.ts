import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../api/http';
import { AxiosError } from 'axios';
import { addTaskToCol } from './kanban.slice';
import { IPriorityType } from '../components/priority-select/PrioritySelect.type';
import { ITypeSelectType } from '../components/type-select/type-select';
import { IColumns } from '../components/column/Column.type';
import { ITask } from '../components/task-card/task-card.type';

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

//Get project members
export const fetchGetProjectMembers = createAsyncThunk(
  'projects/fetchGetProjectMembers',
  async ({ projId }: { projId: number }, { rejectWithValue }) => {
    try {
      const res = await instance.get(`projects/${projId}/members`);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);

//Add member to project
export const fetchAddMemberToProject = createAsyncThunk(
  'project/fetchAddMemberToProject',
  async (
    { projId, memberIds }: { projId: number; memberIds: number[] },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.post(`projects/${projId}/members`, memberIds);

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);

//Delete member from project
export const fetchDeleteMemberFromProject = createAsyncThunk(
  'project/fetchDeleteMemberFromProject',
  async (
    { projId, memberId }: { projId: number; memberId: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.delete(
        `projects/${projId}/members/${memberId}`
      );

      if (res.status === 200) {
        return memberId;
      }
    } catch (err) {
      return rejectWithValue(err as AxiosError);
    }
  }
);

const checkParams = async (
  params: { key: string; value: string }[] | null | undefined
) => {
  let paramsUrl = '';
  if (params) {
    paramsUrl += '?';
    for (const filter of params) {
      paramsUrl += `${filter.key}=${filter.value}&`;
    }
  } else {
    return null;
  }
  return paramsUrl;
};

//Get project dashboard
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
      const paramsUlr = await checkParams(params);
      const res = await instance.get(
        `projects/${projId}/dashboard${paramsUlr ? `${paramsUlr}` : ''}`
      );
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
