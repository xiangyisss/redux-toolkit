import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/Counter/counterSlice';
import todoSlice from '../features/Todo/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todoItems: todoSlice,
  },
});
