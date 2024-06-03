import createAsyncThunk from "redux";

// //Get info about uset
// export const fetchGetUserInfo = createAsyncThunk(
//   'projects/fetchGetUserInfo',
//   async (userId: any, { rejectWithValue, dispatch }) => {
//     try {
//       const res = await instance.get(`/users/${userId}`);

//       if (res.status === 200) {
//         dispatch(setUserInfo(res.data));
//       }
//     } catch (err) {
//       return rejectWithValue(err as Error);
//     }
//   }
// );
