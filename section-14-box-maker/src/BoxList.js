import React, { Component } from 'react';

import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  state = {
    boxes: []
  }
  
  addBoxHandler = (box) => {
    this.setState(state => ({
      boxes: [...state.boxes, box]
    }));
  }

  removeBoxHandler = (id) => {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  render(){
    const newBox = this.state.boxes.map(box => (
      <Box 
        key={box.id} 
        id={box.id} 
        colour={box.colour} 
        width={box.width} 
        height={box.height}
        removeBox={() => this.removeBoxHandler(box.id)}
        />
    ))
    return (
      <div>
        <h1>Colour Box Maker</h1>
        <NewBoxForm addBox={this.addBoxHandler}/>
        <div className='BoxList'>{newBox}</div>
      </div>
    )
  }
}

export default BoxList;