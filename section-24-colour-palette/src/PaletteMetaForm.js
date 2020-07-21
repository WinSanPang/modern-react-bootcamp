import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
    state = {
      stage: 'form',
      newPaletteName: ''
    };
    
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

    handleClickOpen = () => {
      this.setState({open: true});
    };
    
    showEmojiHandler = () => {
      this.setState({stage: 'emoji'});
    }

    savePaletteHandler = (emoji) => {
      const newPalette = {
        paletteName: this.state.newPaletteName, 
        emoji: emoji.native
      };
      this.props.savePaletteHandler(newPalette);
      this.setState({stage: ''});
    }

    render() {
      const { newPaletteName, stage } = this.state;
      const { hideFormHandler } = this.props;

    return (
      <div>
        <Dialog open={stage === 'emoji'} onClose={hideFormHandler}>
        <DialogTitle id="form-dialog-title">Choose an emoji for your palette</DialogTitle>
          <Picker 
            title='Pick an emoji'
            onSelect={this.savePaletteHandler}/>
        </Dialog>
        <Dialog open={stage === 'form'} onClose={hideFormHandler} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Save Your Palette</DialogTitle>
          <ValidatorForm onSubmit={() => this.showEmojiHandler()}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new colourful palette. Make sure the palette name is unique!
            </DialogContentText>
              <TextValidator 
                label='Palette Name' 
                value={newPaletteName}
                name='newPaletteName' 
                onChange={this.paletteChangeHandler}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter a palette name', 'Palette name must be unique']}
                fullWidth
                margin='normal'
                />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideFormHandler} color="primary">
              Cancel
            </Button>
            <Fab variant='extended' color='primary' type='submit'>Save Palette</Fab>
          </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>  
    );
  }
}

export default PaletteMetaForm;