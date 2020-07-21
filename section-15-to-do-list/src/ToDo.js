import React, { Component } from 'react';

import './ToDo.css';

class ToDo extends Component {
  state = {
    isEditing: false,
    task: this.props.task
  }

  editToDoHandler = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  updateToDoHandler = (evt) => {
    evt.preventDefault();
    this.props.updateToDo(this.props.id, this.state.task);
    this.setState({isEditing: false});
  }

  onChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  onCompleteHandler = (evt) => {
    this.props.completeToDo(this.props.id);
  }

  render(){
    
    let page;

    if(this.state.isEditing){
      page = (
        <div className='ToDo'>
          <form className='ToDo-edit-form' onSubmit={this.updateToDoHandler}>
            <input 
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.onChangeHandler}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      page = (
        <div className='ToDo'>
          <li 
            className={this.props.completed ? 'ToDo-completed' : 'ToDo-task'} 
            onClick={this.onCompleteHandler}>
              {this.props.task}
            </li>
          <div className='ToDo-buttons'>
            <button onClick={this.editToDoHandler}>
              <i class='fas fa-pen'/>
            </button>
            <button onClick={this.props.removeToDo}>
              <i class='fas fa-trash'/>
            </button>
          </div>
        </div>
      );
    }
    return page;
  }
}

export default ToDo;