import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from '../pages/login/__data__/login.slice';

const rootReducer = combineReducers({
  auth: LoginSlice,
});

export default rootReducer;