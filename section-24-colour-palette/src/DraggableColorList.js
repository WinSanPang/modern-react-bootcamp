import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';

import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(({colors, deleteColorHandler}) => {
  return (
    <div style={{height: '100%'}}>
      {colors.map((color, i) => (
        <DraggableColorBox 
          key={color.name} 
          index={i}
          color={color.color} 
          name={color.name} 
          deleteColorHandler={() => deleteColorHandler(color.name)}
          />
      ))}
    </div>
  );
})

export default DraggableColorList;