import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';
import { Todo } from './Todo';

export const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector((state) => state.todoItems.todos);
  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue('');
  };
  const handleRemoveTodo = (id) => {
    console.log(id);
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo Item</button>
      <div>
        {todos.map(({ id, todo }) => (
          <Todo key={id} id={id} todo={todo} removeValue={handleRemoveTodo} />
        ))}
      </div>
    </div>
  );
};
