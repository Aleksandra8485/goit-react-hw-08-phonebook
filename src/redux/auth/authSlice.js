import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  // inne dane związane z autoryzacją, np. token JWT, itp.
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    // inne akcje związane z autoryzacją, np. aktualizacja tokena JWT, itp.
  },
});

export const isAuthenticated = state => state.auth.isAuthenticated;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
