import { RootState } from "../../store";

export const getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
