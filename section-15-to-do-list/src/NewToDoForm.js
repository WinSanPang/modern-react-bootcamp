import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';

import './NewToDoForm.css';

class NewToDoForm extends Component {
  state = {
    task: ''
  }

  onChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    const newToDo = {...this.state, id: uuid(), completed: false}
    this.props.addToDo(newToDo);
    this.setState({task: ''})
  }
  render(){
    return (
      <form className='NewToDoForm' onSubmit={this.onSubmitHandler}>
        <label htmlFor='task'>Add a New To Do Item:</label>
        <input
          id='task'
          name='task'
          type='text'
          placeholder='e.g. Feed the bunnies'
          value={this.state.task}
          onChange={this.onChangeHandler}
        />
        <button>Add To Do</button>
      </form>
    )
  }
}

export default NewToDoForm;