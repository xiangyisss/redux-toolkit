import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.floor(Math.random() * 100),
        todo: action.payload,
        // completed: false,
      };
      state.todos = [...state.todos, todo];
    },
    removeTodo: (state, action) => {
      console.log('payload is ', action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log('State contains ...', state.todos);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
