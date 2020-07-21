import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Fab from '@material-ui/core/Fab';
import { arrayMove } from 'react-sortable-hoc';

import styles from './styles/NewPaletteFormStyles';
import ColorPickerForm from './ColorPickerForm';
import DraggableColourList from './DraggableColorList';
import PaletteFormNavbar from './PaletteFormNavbar';
import seedColors from './seedsColors';

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  }

  state = {
    open: true,
    colors: seedColors[0].colors,
    newPaletteName: '',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColorHandler = (newColor) => {
    this.setState({colors: [...this.state.colors, newColor], newName: ''});
  }

  paletteChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  savePaletteHandler = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  }

  deleteColorHandler = (colorName) => {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    });
  }

  sortEndHandler = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  }

  clearPaletteHandler = () => {
    this.setState({colors: []});
  }

  randomColorHandler = () => {
    const allColors = this.props.palettes.map(p => p.colors).flat();
    let randomNumber;
    let randomColor;
    let isDupColor = true;
    while(isDupColor) {
      randomNumber = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[randomNumber];
      isDupColor = this.state.colors.some(
        color => color.name === randomColor.name
      );
      console.log(randomColor)
    }
    this.setState({colors: [...this.state.colors, randomColor]});
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNavbar 
          open={open}
          palettes={palettes} 
          savePaletteHandler={this.savePaletteHandler} 
          handleDrawerOpen={this.handleDrawerOpen}/>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>Design Your Palette</Typography>
            <div className={classes.buttons}>
              <Fab variant='extended' color='secondary' onClick={this.clearPaletteHandler} className={classes.button}>
                Clear Palette
              </Fab>
              <Fab variant='extended' color='primary' onClick={this.randomColorHandler} disabled={paletteIsFull} className={classes.button}>
              {paletteIsFull ? 'Palette Full' : 'Random Colour'}
              </Fab>
            </div>
            <Divider />
            <ColorPickerForm paletteIsFull={paletteIsFull} addNewColorHandler={this.addNewColorHandler} colors={colors}/>
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColourList 
            colors={colors} 
            deleteColorHandler={this.deleteColorHandler}
            axis='xy'
            onSortEnd={this.sortEndHandler}
            distance={20}
            />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(NewPaletteForm);