import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import styles from './styles/NavbarStyles';

class Navbar extends Component {
  state = {
    currentFormat: 'hex',
    open: false
  }

  changeFormatHandler = (e) => {
    this.setState({currentFormat: e.target.value, open: true});
    this.props.changeFormatHandler(e.target.value);
  }

  closeSnackbarHandler = () => {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevelHandler, showingAllColors, classes } = this.props;
    const { currentFormat } = this.state;

    return (
      <header className={classes.navbar}>
        <div className={classes.navbarLogo}>
          <Link to='/'>ReactColourPicker</Link>
        </div>
        {showingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.navbarSlider}>
              <Slider 
                defaultValue={level} 
                min={100} 
                max={900} 
                step={100} 
                onAfterChange={changeLevelHandler}/>
            </div>
          </div>
        )}
        <div className={classes.navbarSelectContainer}>
          <Select 
            value={currentFormat} 
            onChange={this.changeFormatHandler}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id='message-id'>Color Format Changed to {currentFormat.toUpperCase()}</span>}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={this.closeSnackbarHandler}
          action={[
            <IconButton 
              onClick={this.closeSnackbarHandler} 
              color='inherit' 
              key='close' 
              aria-label='close'>
              <CloseIcon/>
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);