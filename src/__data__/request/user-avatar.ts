import createAsyncThunk from "redux";
// export const fetchDeleteUserAvatar = createAsyncThunk(
//   'projects/fetchDeleteUserAvatar',
//   async (userId: any, { rejectWithValue, dispatch }) => {
//     try {
//       const res = await instance.delete(`files/user-pic/${userId}`);
//       if (res.status === 200) {
//         dispatch(setUserPic(null));
//       }
//     } catch (err) {
//       return rejectWithValue(err as Error);
//     }
//   }
// );

// export const fetchUploadNewUserAvatar = createAsyncThunk(
//   'projects/fetchUploadNewUserAvatar',
//   async ({ userId, userPic, formData }: any, { rejectWithValue, dispatch }) => {
//     try {
//       if (!!userPic) {
//         await dispatch(fetchDeleteUserAvatar(userId));
//       }

//       const res = await instance.post(`files/user-pic/${userId}`, formData);

//       if (res.status === 200) {
//         dispatch(setUserPic(res.data.fileUrn));
//       }
//     } catch (err) {
//       return rejectWithValue(err as Error);
//     }
//   }
// );
