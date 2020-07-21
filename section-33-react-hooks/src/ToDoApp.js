import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { ToDosProvider } from './contexts/toDosContext';

function ToDoApp(){

  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: '100vh',
      backgroundColor: '#fafafa'
    }}
    evelation={0}>
      <AppBar color='primary' position='static' style={{height: '64px'}}>
        <Toolbar>
          <Typography color='inherit'>To Do wHooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{marginTop: '2rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <ToDosProvider>
            <ToDoForm/>
            <ToDoList/>
          </ToDosProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ToDoApp;