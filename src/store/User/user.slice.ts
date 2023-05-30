import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user.type';

interface IAppSlice {
  userInfo: IUser | null;
}

const initialState: IAppSlice = {
  userInfo: null,
};

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = UserSlice.actions;
export default UserSlice.reducer;
