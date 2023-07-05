import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user.type';

interface IAppSlice {
  userInfo: IUser | null;
  userId: number | null;
}

const initialState: IAppSlice = {
  userInfo: null,
  userId: localStorage.getItem('userId')
    ? Number(localStorage.getItem('userId'))
    : null,
};

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      localStorage.setItem('userId', JSON.stringify(action.payload));
      state.userId = action.payload;
    },
  },
});

export const { setUserInfo, setUserId } = UserSlice.actions;
export default UserSlice.reducer;
