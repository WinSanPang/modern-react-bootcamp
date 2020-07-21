import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/toDosContext';

function ToDoForm(){
  const [value, handleValueChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  
  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch({type: 'ADD', task: value});
        reset();
      }}>
        <TextField 
          value={value} 
          onChange={handleValueChange} 
          margin='normal' 
          label='Add a New To Do' fullWidth/>
      </form>
    </Paper>
  )
}

export default ToDoForm;