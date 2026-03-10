import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = []; // Best to start with an empty array

const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      const newTodo = { 
        id: nanoid(), 
        message: action.payload.message, 
        isChecked: false 
      };
      // FIX: state.push(newTodo) is enough. 
      // Using (...state) inside push would try to add the whole array to itself!
      state.push(newTodo);
    },

    UpdateTodo: (state, action) => {
      const todo = state.find((single) => single.id === action.payload.id);
      if (todo) {
        // Ensure your component sends { id, Nmessage }
        todo.message = action.payload.Nmessage;
      }
    },

    DeletTodo: (state, action) => {
      // FIX: If you pass just the ID string in dispatch, use action.payload.
      // If you pass an object, use action.payload.id.
      return state.filter((t) => t.id !== action.payload.id);
    },

    IsToggle: (state, action) => {
      // FIX: 'action.payloadload' was a typo, and 'tado' was a typo.
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.isChecked = !todo.isChecked;
      }
    }
  }
});
// FIX: 'export defualt' had a typo
export const { AddTodo, UpdateTodo, DeletTodo, IsToggle } = TodoSlice.actions;
export default TodoSlice.reducer;