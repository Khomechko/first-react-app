import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchUsersData } from "../../../models/fetch-user-types";
import { fetchUsers } from "../../../services/fetch-users";

type UserState = {
  userData: FetchUsersData;
  isLoading: boolean;
  error: string;
};

const initialState: UserState = {
  userData: { page: 0, per_page: 8, total: 12, total_pages: 2, data: [] },
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
    setUsersToDefault: (state) => {
      state.userData.data = state.userData.data.slice(
        0,
        state.userData.per_page
      );
      state.userData.page = 1;
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
        state.userData.data = [...state.userData.data, ...action.payload.data];
        state.userData.page = state.userData.page + 1;
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

export const { clearError, setUsersToDefault } = userSlice.actions;
export default userSlice.reducer;
