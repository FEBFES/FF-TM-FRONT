import { RootState } from "@/__data__/store";

export const getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
