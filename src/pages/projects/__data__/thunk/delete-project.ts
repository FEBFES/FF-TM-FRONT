import { getProjectsRequest } from "../request/get-projects";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProject } from "../type/projects.type";
import { AxiosError } from "axios";
import { deleteProjectRequest } from "../request/delete-projects";

// Delete project by id
export const deleteProjectThunk = createAsyncThunk(
  "projects/deleteProj",
  async (id: number, thunkAPI) => {
    try {
      const response = await deleteProjectRequest({ id });

      if (response.status === 200) {
        return id;
      }

      return null;
    } catch (err) {
      let error: AxiosError = err;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue(error.response.data as AxiosError);
    }
  }
);
