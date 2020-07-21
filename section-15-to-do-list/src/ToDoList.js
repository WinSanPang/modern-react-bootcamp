import React, { Component } from 'react';

import './ToDoList.css';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';

class ToDoList extends Component {
  state = {
    todos: []
  }

  addToDoHandler = (todo) => {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  }

  removeToDoHandler = (id) => {
    this.setState({
      todos: this.state.todos.filter(task => task.id !== id)
    })
  }

  updateNewToDoHandler = (id, updatedTask) => {
    const updatedToDos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, task: updatedTask}
      }
      return todo;
    });
    this.setState({todos: updatedToDos});
  }

  markCompletedHandler = (id) => {
    const updatedToDos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });
    this.setState({todos: updatedToDos});
  }

  render(){
    const todos = this.state.todos.map(todo => {
      return <ToDo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeToDo={() => this.removeToDoHandler(todo.id)}
        updateToDo={this.updateNewToDoHandler}
        completeToDo={this.markCompletedHandler}
      />
    })

    return (
      <div className='ToDoList'>
        <h1>To Do List App</h1>
        <div className='Divider'/>
        <NewToDoForm addToDo={this.addToDoHandler}/>
        <ul className='ToDoList'>{todos}</ul>
      </div>
    )
  }
}

export default ToDoList;