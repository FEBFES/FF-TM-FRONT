import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user.type';

interface IAppSlice {
  displayName: string | null;
  email: string | null;
  firstName: string | null;
  id: number | null;
  lastName: string | null;
  username: string | null;
  userPic: string | null;
  userId: number | null;
}

const initialState: IAppSlice = {
  displayName: null,
  email: null,
  firstName: null,
  id: null,
  lastName: null,
  username: null,
  userPic: null,
  userId: localStorage.getItem('userId')
    ? Number(localStorage.getItem('userId'))
    : null,
};

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
      state.username = action.payload.username;
      state.userPic = action.payload.userPic;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      localStorage.setItem('userId', JSON.stringify(action.payload));
      state.userId = action.payload;
    },
    setUserPic: (state, action: PayloadAction<string | null>) => {
      state.userPic = action.payload;
    },
  },
});

export const { setUserInfo, setUserId, setUserPic } = UserSlice.actions;
export default UserSlice.reducer;
