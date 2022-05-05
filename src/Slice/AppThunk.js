import { createAsyncThunk } from "@reduxjs/toolkit";

//For componet D only
export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (dispatch, getState) => {
      return await fetch("https://jsonplaceholder.typicode.com/users").then(
        (res) => res.json()
      );
    }
  );