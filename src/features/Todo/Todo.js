import React from 'react';

export const Todo = ({ removeValue, id, todo }) => {
  const deleteTodo = () => {
    removeValue(id);
  };
  return (
    <div onClick={deleteTodo}>
      <p>{todo}</p>
    </div>
  );
};
