import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import styles from './styles/PaletteStyles';
import ColorBox from './ColorBox';
import Footer from './Footer';
import Navbar from './Navbar';

class SingleColorPalette extends Component {
  colorShadesHandler = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  state = {
    shades: this.colorShadesHandler(this.props.palette, this.props.colorId),
    format: 'hex'
  }

  changeFormatHandler = (val) => {
    this.setState({ format: val });
  }

  render() {
    const { format, shades } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;

    const colorBoxes = shades.map(color => (
      <ColorBox key={color.name} name={color.name} background={color[format]} showFullPalette={false}/>
    ))
    return (
      <div className={classes.palette}>
        <Navbar changeFormatHandler={this.changeFormatHandler} showingAllColors={false}/>
        <h1>SingleColorPalette</h1>
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBackButton}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);