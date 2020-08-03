import React, { useState } from 'react';

function useTodos() {

    const [todos, setTodos] = useState([
        {
            title: "Create a todolist to show my React skills 🤓",
            content: "For that I had to use the hooks",
            done: true,
        },
        {
            title: "Get recruited by Thomas",
            content: "Follow the recruitment process to be able to integrate the company",
            done: false,
        },
        {
            title: "Obtain my diploma by being a major of promotion",
            content: "For this I have to work on several projects during the whole year",
            done: false,
        },
    ]);

    const methods = {
        getTodos: () => {},
        addTodo: (todo) => setTodos([...todos, todo]),
        deleteTodo: (title) => setTodos(todos.filter(_todo => title != _todo.title)),
        markAs: (todo, state) => {
            const todoIndex = todos.findIndex(_todo => todo.title === _todo.title);
            todos[todoIndex] = {
                ...todo,
                done: state
            }
            setTodos([...todos])
        },
    }

    return [todos, methods];
}

export default useTodos;
