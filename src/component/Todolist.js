import React from 'react'
import Todo from './Todo';
import { Box } from '@material-ui/core';
import TodoContext from '../context/TodoContext';

function Todolist() {
    
    return (
        <TodoContext.Consumer>
            {({todos, methods}) => {
                const {deleteTodo, markAs} = methods;

                return (
                    <Box p={2}>
                        { todos.map(todo => (
                            <Todo 
                                key={todo.id}
                                todo={todo}
                                deleteTodo={deleteTodo} 
                                markAs={markAs} 
                            />
                        ))}
                    </Box>
                )}}
        </TodoContext.Consumer>
    );
}

export default Todolist
