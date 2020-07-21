import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
  const { classes, name, color, deleteColorHandler } = props;
  return (
    <div 
      className={classes.root} 
      style={{backgroundColor: color}}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <DeleteRoundedIcon className={classes.deleteIcon} onClick={deleteColorHandler}/>
        </div>
    </div>
  );
})

export default withStyles(styles)(DraggableColorBox);