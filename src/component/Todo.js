import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 400,
      margin: 'auto',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    media: {
      height: 140,
    },
    done: {
        textDecoration: 'line-through',
    },
}));
  
export default function Todo({todo, markAs, deleteTodo}) {
    const classes = useStyles();
    const {title, content, done} = todo;
    const { enqueueSnackbar } = useSnackbar();

    return (
        <div className='todo-card'>
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={done ? classes.done : ''}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={done ? classes.done : ''}>
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button 
                    className={'todo-mark-as-button'}
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        markAs(todo, Number(!done));
                        const message = done ?  "undone": "done" ;
                        enqueueSnackbar(`Todo has been marked as  ${message}`, { 
                            variant: 'success',
                        });
                    }}
                >
                    {done ? "Undone" : "Done"}
                    </Button>
                    <Button 
                        className={'todo-delete-button'}
                        size="small"
                        color="secondary"
                        variant="contained"
                        onClick={() => {
                            enqueueSnackbar(`Todo ${title} has beed removed`, { 
                                variant: 'success',
                            });
                            deleteTodo(title)
                        }}   
                    >
                    Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}