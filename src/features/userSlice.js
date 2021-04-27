import { createSlice } from '@reduxjs/toolkit';
 
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = userSlice.actions;

// Use to get a piece of information present into the store
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
