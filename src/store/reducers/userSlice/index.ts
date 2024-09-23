import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserResponse } from "models/fetch-user-types";
import { fetchUsers } from "services/fetch-users";

type UserState = {
  users: User[];
  isLoading: boolean;
  error: string;
  perPage: number;
  totalPages: number;
  page: number;
};

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  perPage: 8,
  totalPages: 0,
  page: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
    setUsersToDefault: (state) => {
      state.users = state.users.slice(0, state.perPage);
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<UserResponse>) => {
        state.isLoading = false;
        state.users.push(...action.payload.users);
        state.totalPages = action.payload.totalPages;
        state.page += 1;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message || "Critical error, sorry";
    });
  },
});

export const { clearError, setUsersToDefault } = userSlice.actions;
export default userSlice.reducer;
