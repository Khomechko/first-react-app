import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  (numberOfUser: number) => {
    return fetch(`https://reqres.in/api/users?per_page=${numberOfUser}`).then(
      (response) => response.json()
    );
  }
);
