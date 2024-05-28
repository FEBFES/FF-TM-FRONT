import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchAddProject,
  fetchDelProject,
  fetchFavoriteToggle,
  fetchProjects,
} from '../middleware/old/projects.thunk';
import { IProject } from '../../types/old/projects.type';

interface IProjectInitialState {
  projects: IProject[];
  isLoad: boolean;
  error: string | null;
  haveFavoriteProjects: boolean;
}

const projectInitialState: IProjectInitialState = {
  projects: [],
  isLoad: false,
  error: null,
  haveFavoriteProjects: false,
};

const ProjectsSlice = createSlice({
  name: 'projects',
  initialState: projectInitialState,
  reducers: {
    // setCurProj: (state, action: PayloadAction<IProject>) => {
    //   state.curProj = action.payload;
    // },
    // setCurDashboard: (state, action: PayloadAction<IColumns[]>) => {
    //   state.curDashboard = action.payload.sort(
    //     (a: IColumns, b: IColumns) => a.columnOrder - b.columnOrder
    //   );
    // },
  },
  extraReducers: (builder) => {
    //
    // Getting a list of user's projects
    //
    builder.addCase(fetchProjects.pending, (state, action) => {
      state.isLoad = true;
      state.error = null;
    });
    builder.addCase(
      fetchProjects.fulfilled,
      (state, action: PayloadAction<IProject[]>) => {
        state.projects = action.payload;
        state.haveFavoriteProjects = action.payload.some(
          (proj) => proj.isFavourite
        );
        state.isLoad = false;
      }
    );
    //
    // Add new project
    //
    builder.addCase(fetchAddProject.fulfilled, (state, action) => {
      state.projects.push(action.payload);
    });
    //todo - add pending
    //
    // Delete projects
    //
    builder.addCase(fetchDelProject.fulfilled, (state, action) => {
      state.projects = state.projects.filter((el) => el.id !== action.payload);
    });
    //
    // Set project is favorite toggle
    //
    builder.addCase(fetchFavoriteToggle.fulfilled, (state, action) => {
      state.projects = state.projects.map((el: IProject) => {
        if (action?.payload?.projId === el.id) {
          return {
            ...el,
            isFavourite: action.payload.isFav,
          };
        }
        return el;
      });
      state.haveFavoriteProjects = state.projects.some(
        (proj) => proj.isFavourite
      );
    });

    //todo - add pending
    builder.addMatcher(
      (action: AnyAction) => {
        return action.type.endsWith('rejected');
      },
      (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoad = false;
      }
    );
  },
});

// export const { setCurProj, setCurDashboard } = ProjectsSlice.actions;
export default ProjectsSlice.reducer;
