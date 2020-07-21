import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ToDo from './ToDo';
import { ToDosContext } from './contexts/toDosContext';

function ToDoList() {
  const toDos = useContext(ToDosContext);

  if (toDos.length) 
    return (
      <Paper>
        <List>
          {toDos.map((toDo, i) => (
            <>
              <ToDo 
                {...toDo} 
                key={toDo.id}/>
              {i <toDos.length - 1 && <Divider/>}
            </>
          ))}
        </List>
      </Paper>
  );
  return null;
}

export default ToDoList;