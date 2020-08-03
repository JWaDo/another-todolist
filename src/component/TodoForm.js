import React, { useEffect, createRef } from 'react';
import { TextField, Paper, Box, Button, makeStyles } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import TodoContext from '../context/TodoContext';

const useStyles = makeStyles({
    formGroup: {
        '& > *': {
            marginBottom: '1rem',
        },
        '& > *:last-child': {
            marginBottom: 0,
        },
    },
});

const initialState = {
    title: '',
    content: '',
    done: 0,
};

function TodoForm({ addTodo }) {
    
    const [todo, setTodo] = React.useState(initialState);
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    
    const handleChange = e => setTodo({ ...todo, [e.target.name]: e.target.value });

    const handleSubmit = (e, addTodo) => {
        e.preventDefault();
        addTodo(todo);
        setTodo(initialState);
        enqueueSnackbar(`Todo ${todo.title} has beed added`, { 
            variant: 'success',
        });
    }
    
    return (
        <TodoContext.Consumer>
        {({todos, methods}) => {
            const { addTodo } = methods; 
                    
            return (
            <form onSubmit={(e) => handleSubmit(e, addTodo)}>
                <Box p={2}>
                    <Paper>
                        <Box p={2} className={classes.formGroup}>
                            <TextField autoFocus id='todo-title-form' fullWidth onChange={handleChange} type='text' name="title" required label='Title' value={todo.title} />
                            <TextField id='todo-description-form' fullWidth onChange={handleChange} type='text' name="content" required label='Description' multiline value={todo.content} rows={1} rowsMax={3} />
                            <Box display='flex' justifyContent='flex-end'>
                                <Button id='todo-submit-btn-form' color='primary' variant='contained' type='submit'>
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </form>
        )}}
        </TodoContext.Consumer>
    );
}

export default TodoForm;
