import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "Todos",
  initialState: [
    {id: 1, title: "Dummy for testing 1.", completed: false},
    {id: 2, title: "Dummy for testing 2.", completed: false},
    {id: 3, title: "Dummy for testing 3.", completed: false},
    {id: 4, title: "Dummy for testing 4.", completed: false},
  ],

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().toLocaleString(),
        title: action.payload.title,
        completed: false,
      };

      state.push(todo);
    },
    completeTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const {addTodo, removeTodo, completeTodo} = todoSlice.actions;

export default todoSlice.reducer;
