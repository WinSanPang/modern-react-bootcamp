import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './styles/PaletteStyles';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import Footer from './Footer';

class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  };

  changeLevelHandler = (level) => {
    this.setState({level})
  }

  changeFormatHandler = (val) => {
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        background={color[format]} 
        name={color.name} 
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showFullPalette/>
    ));

    return (
      <div className={classes.palette}>
        <Navbar 
          level={level} 
          changeLevelHandler={this.changeLevelHandler} 
          changeFormatHandler={this.changeFormatHandler}
          showingAllColors={true}/>
        <div className={classes.paletteColors}>
          {colorBoxes}
        </div>
        <Footer paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default withStyles(styles)(Palette);