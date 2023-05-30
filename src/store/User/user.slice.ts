import { createSlice } from '@reduxjs/toolkit';

interface IAppSlice {
  userInfo: {}
}

const initialState: IAppSlice = {
  userInfo: {}
};

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfo: () => {

    }
  },
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
