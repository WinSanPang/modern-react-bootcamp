import React, { PureComponent } from 'react';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { withStyles } from '@material-ui/styles';

import styles from './styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
  deletePaletteHandler = (e) => {
    e.stopPropagation();
    this.props.openDiaogueHandler(this.props.id);
  }

  goToPaletteHandler = () => {
    this.props.goToPaletteHandler(this.props.id);  
  }

  render() {
  const { classes, paletteName, emoji, colors } = this.props;
  const miniColorBoxes = colors.map(color => (
    <div 
      className={classes.miniColor}
      style={{backgroundColor: color.color}}
      key={color.name}
      />
  ));

    return (
      <div className={classes.root} onClick={this.goToPaletteHandler}>
        <DeleteRoundedIcon 
          className={classes.deleteIcon} 
          style={{transition: 'all 0.3s ease-in-out'}}
          onClick={this.deletePaletteHandler}
          />
        <div className={classes.colors}>
          {miniColorBoxes}
        </div>
        <h5 className={classes.title}>{paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);