import React, { useState } from 'react';
import { AppRouter } from '../routers/AppRouter';
import { TodoContext } from '../hooks/todoContext';

export const TodoApp = () => {
  const [ todos, setTodos ] = useState([]);
  return (
    <TodoContext.Provider value={{
      todos,
      setTodos
    }}>
      <AppRouter />
    </TodoContext.Provider>
  );
}
