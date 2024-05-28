import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../type/user.type';

export interface IUserState {
  userInfo: IUser;
  infoIsLoaded: boolean;
}

const initialState: IUserState = {
  userInfo: {
    displayName: null,
    email: null,
    firstName: null,
    id: null,
    lastName: null,
    username: null,
    userPic: null,
  },
  infoIsLoaded: false,
};

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    //tod проверить
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      state.userInfo = {
        //Проверить работает или нет эта строчка
        ...action.payload,
        ...state.userInfo,
      };
    },
    //todo убрать это в пльзу верхнего экшена
    // setUserId: (state, action: PayloadAction<number>) => {
    //   localStorage.setItem('userId', JSON.stringify(action.payload));
    //   state.userInfo.id = action.payload;
    // },
    setUserPic: (state, action: PayloadAction<string | null>) => {
      state.userInfo.userPic = action.payload;
    },
  },
});

export default UserSlice;
