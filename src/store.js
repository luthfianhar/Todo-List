import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./features/studentSlice";
import todoReducer from "./features/todoSlice.js"; // TAMBAH INI

export const store = configureStore({
  reducer: {
    students: studentReducer,
    todo: todoReducer, // TAMBAH INI
  },
});
