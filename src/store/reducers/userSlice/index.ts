import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchUsersData } from "../../../models/fetch-user-types";
import { fetchUsers } from "../../../services/fetch-users";

type UserState = {
  userData: FetchUsersData;
  isLoading: boolean;
  error: string;
};

const initialState: UserState = {
  userData: { page: 0, per_page: 8, total: 0, total_pages: 0, data: [] },
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<FetchUsersData>) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.userData = {
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
        data: [],
      };
      state.error = action.error.message || "Critical error, sorry";
    });
  },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;
