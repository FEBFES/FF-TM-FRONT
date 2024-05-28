import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/http';

// Set favorite project
export const fetchFavoriteToggle = createAsyncThunk(
  '',
  async (
    { projId, isFav }: { projId: number | null; isFav: boolean },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.patch(`projects/${projId}`, [
        {
          op: 'UPDATE',
          key: 'isFavourite',
          value: isFav,
        },
      ]);

      if (res.status === 200) {
        return {
          projId,
          isFav,
        };
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Get all projects
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get('projects');

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Add new project
export const fetchAddProject = createAsyncThunk(
  'projects/fetchAddProject',
  //todo any
  async ({ name, desc }: any, { rejectWithValue }) => {
    try {
      const res = await instance.post('projects', { name, description: desc });

      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);

//Delete project by id
export const fetchDelProject = createAsyncThunk(
  'projects/fetchDelProject',
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await instance.delete(`projects/${id}`);
      if (res.status === 200) {
        return id;
      }
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);

//Update project info (name/desc)
export const fetchUpdateProject = createAsyncThunk(
  'projects/fetchUpdateProjetct',
  async (
    { id, name, desc }: { id: number; name: string; desc: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await instance.put(`projects/${id}`, {
        name,
        description: desc,
      });
      if (res.status === 200) {
        return id;
      }
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);
