// src/features/studentSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (nama, kelas, alamat) => ({
        payload: {
          id: nanoid(),
          nama,
          kelas,
          alamat,
        },
      }),
    },
    removeStudent: (state, action) => {
      return state.filter((student) => student.id !== action.payload);
    },
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;