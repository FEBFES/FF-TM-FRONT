import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from './features/auth/auth-slice';

const rootReducer = combineReducers({
  auth: AuthSlice,
});

export default rootReducer;