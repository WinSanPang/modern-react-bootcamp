import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
  state = {
    currentColor: 'skyblue',
    colorName: '',
  }
  
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => 
      this.props.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', value => 
      this.props.colors.every(
        ({color}) => color !== this.state.currentColor)
    );
  }

  updateCurrentColorHandler = (newColor) => {
    this.setState({ currentColor: newColor.hex});
  }

  paletteChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  addNewColorHandler = () => {
    const newColor = { 
      color: this.state.currentColor,
      name: this.state.colorName }
    this.props.addNewColorHandler(newColor);
    this.setState({colorName: ''})
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, colorName } = this.state;

    return (
      <div>
        <ChromePicker 
            color={currentColor} 
            onChangeComplete={this.updateCurrentColorHandler}
            className={classes.colorPicker}
            />
          <ValidatorForm onSubmit={this.addNewColorHandler} instantValidate={false}>
            <TextValidator 
              value={colorName} 
              className={classes.colorNameInput}
              name='colorName'
              variant='filled'
              margin='normal'
              placeholder='Add a Colour Name'
              onChange={this.paletteChangeHandler}
              validators={['required', 'isColorUnique', 'isColorNameUnique']}
              errorMessages={['Enter a color name', 'Color is already used', 'Color name must be unique']}
              />
            <Fab 
              variant='extended'
              className={classes.addColor}
              type='submit' 
              color='primary'
              style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor}}
              disabled={paletteIsFull}
            >
              {paletteIsFull ? 'Palette Full' : 'Add Colour'}
            </Fab>
          </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);