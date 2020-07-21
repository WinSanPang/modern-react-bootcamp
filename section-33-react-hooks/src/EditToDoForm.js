import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';

import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/toDosContext';

function EditToForm({ id, task, toggleIsEditing }){
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({type: 'EDIT', id: id, newTask: value});
      reset();
      toggleIsEditing();
    }}
      style={{ marginLeft: "1rem", width: "50%" }}>
      <TextField 
        margin='normal' 
        value={value} 
        onChange={handleChange} 
        fullWidth
        autoFocus/>
    </form>
  )
}

export default EditToForm;