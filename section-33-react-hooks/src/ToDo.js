import React, { useContext, memo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';

import EditToDoForm from './EditToDoForm';
import useToggleState from './hooks/useToggleState';
import { DispatchContext } from './contexts/toDosContext';

function ToDo( { id, task, completed }){
  const [isEditing, toggleIsEditing] = useToggleState();
  const dispatch = useContext(DispatchContext);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? ( 
        <EditToDoForm 
          id={id} 
          task={task} 
          toggleIsEditing={toggleIsEditing}/> 
      ) : (
        <>
          <Checkbox 
            checked={completed} 
            tabIndex={-1} 
            onClick={() => dispatch({type: 'TOGGLE', id: id})}/>
          <ListItemText 
            style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => dispatch({type: 'REMOVE', id: id})}>
              <DeleteRounded/>
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggleIsEditing}>
              <EditIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </>
     )}
    </ListItem>
  );
}

export default memo(ToDo);