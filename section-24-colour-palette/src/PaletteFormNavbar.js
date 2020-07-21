import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Fab from '@material-ui/core/Fab';
import { ValidatorForm } from 'react-material-ui-form-validator';

import styles from './styles/PaletteFormNavbar'
import PaletteMetaForm from './PaletteMetaForm';

class PaletteFormNavbar extends Component {
  state = { newPaletteName: '', formShowing: false }
  
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
    this.props.palettes.every(
      ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  paletteChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  showFormHandler = () => {
    this.setState({formShowing: true});
  }

  hideFormHandler = () => {
    this.setState({formShowing: false});
  }

  render() {
    
    const { classes, open, savePaletteHandler, handleDrawerOpen, palettes } = this.props;
    const { formShowing } = this.state;
    
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, {[classes.hide]: open})}
            >
              <ChevronRightIcon/>
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create Your Own Palette
            </Typography>  
            </Toolbar>
            <div className={classes.navButtons}>
              <Link to='/'>
                <Fab className={classes.button} variant='extended' color='secondary'>Go Back</Fab>
              </Link>
              <Fab className={classes.button}  variant='extended' color="primary" onClick={this.showFormHandler}>
                Save
              </Fab>
            </div>
        </AppBar>
        {formShowing && (<PaletteMetaForm palettes={palettes} savePaletteHandler={savePaletteHandler} hideFormHandler={this.hideFormHandler}/>)}
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNavbar);