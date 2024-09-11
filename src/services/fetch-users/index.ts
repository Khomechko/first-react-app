import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  (perPage: number) => {
    return fetch(`https://reqres.in/api/users?per_page=${perPage}`).then(
      (response) => response.json()
    );
  }
);
