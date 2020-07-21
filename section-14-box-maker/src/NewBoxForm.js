import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';

class NewBoxForm extends Component {
  state = {
    colour: '',
    width: '',
    height: ''
  }

  onChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    const newBox = {...this.state, id: uuid()}
    this.props.addBox(newBox);
    this.setState({colour: '', width: '', height: ''})
  }

  render(){
    return(
      <form onSubmit={this.onSubmitHandler}>
        <label htmlFor='colour'>Colour:</label>
        <input
          id='colour'
          name='colour'
          type='text'
          value={this.state.colour}
          onChange={this.onChangeHandler}
        />
        <br/>
        <label htmlFor='width'>Width:</label>
        <input
          id='width'
          name='width'
          type='text'
          value={this.state.width}
          onChange={this.onChangeHandler}
        />
        <br/>
        <label htmlFor='height'>Height:</label>
        <input
          id='height'
          name='height'
          type='text'
          value={this.state.height}
          onChange={this.onChangeHandler}
        />
        <br/>
        <button>Make a Box!</button>
      </form>
    )
  }
}

export default NewBoxForm;