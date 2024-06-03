import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { favToggleProjectsRequest } from "../request/fav-toggle-projects";

interface reqParam {
  projId: number;
  isFav: boolean;
}

// Favorite toggle for projects
export const favProjectsThunk = createAsyncThunk(
  "projects/setFavourite",
  async (data: reqParam, thunkAPI) => {
    const { projId, isFav } = data;
    try {
      const response = await favToggleProjectsRequest({ projId, isFav });

      if (response.status === 200) {
        return {
          projId,
          isFav,
        } as reqParam;
      }

      return null;
    } catch (err) {
      let error: AxiosError = err;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
