import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/auth";

const initialState = {
  isUserLoading: false,
  currentUser: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    setLoading(state, action) {
      state.isUserLoading = action.payload;
    },
  },
});

export const authSelector = (state) => state.auth;
export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;

export function loadUser() {
  return async function (dispatch) {
    dispatch(setLoading(true));
    try {
      let user = await AuthService.validateToken();
      dispatch(setUser({ user, isAuthenticated: true }));
    } catch (err) {
      dispatch(setUser({ user: null, isAuthenticated: false }));
    }
    dispatch(setLoading(false));
  };
}
