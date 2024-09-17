import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  (numberOfPage: number) => {
    return fetch(
      `https://reqres.in/api/users?per_page=8&page=${numberOfPage}`
    ).then((response) => response.json());
  }
);
