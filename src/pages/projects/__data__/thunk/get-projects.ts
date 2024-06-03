import { getProjectsRequest } from "../request/get-projects";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProject } from "../type/projects.type";
import { AxiosError } from "axios";

// Get all projects
export const getProjectsThunk = createAsyncThunk(
  "projects/getAllProjects",
  async (_, thunkAPI) => {
    try {
      const response = await getProjectsRequest();

      if (response.status === 200) {
        return response.data as IProject[];
      }

      return [];
    } catch (err) {
      let error: AxiosError = err;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
