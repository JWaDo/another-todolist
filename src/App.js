import React, { useState, useEffect } from 'react';
import './App.css';
import Todolist from './component/Todolist';
import TodoForm from './component/TodoForm';
import AppNavBar from './component/AppNavBar';
import TodoContext from "./context/TodoContext";
import { Container } from '@material-ui/core';
import useTodos from './hooks/useTodos';

function App() {

  const [todos, methods] = useTodos();
  
  return (
    <React.Fragment>
      <TodoContext.Provider value={{ todos, methods }}>
        <AppNavBar/>

        <Container maxWidth='md'>
          <TodoForm />

          <Todolist />
        </Container>
      </TodoContext.Provider>

    </React.Fragment>
  );
}

export default App;
