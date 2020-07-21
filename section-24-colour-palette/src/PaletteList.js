import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  state = {
    deleteDialogOpen: false,
    deletingId: ''
  }

  goToPaletteHandler = (id) => {
    this.props.history.push(`/palette/${id}`);
  }

  openDialogHandler = (id) => {
    this.setState({deleteDialogOpen: true, deletingId: id});
  }

  closeDialogHandler = () => {
    this.setState({deleteDialogOpen: false, deletingId: ''});
  }

  deleteHandler = () => {
    this.props.deletePaletteHandler(this.state.deletingId);
    this.closeDialogHandler();
  }

  render() {
    const { palettes, classes } = this.props;
    const { deleteDialogOpen } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colours</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
            <TransitionGroup className={classes.palettes}>
              {palettes.map(palette => (
                <CSSTransition
                  key={palette.id}
                  classNames='fade'
                  timeout={500}
                  >
                  <MiniPalette 
                    {...palette} 
                    key={palette.id}
                    id={palette.id}
                    goToPaletteHandler={this.goToPaletteHandler} 
                    openDiaogueHandler={this.openDialogHandler}
                    />
                </CSSTransition>
              ))}
            </TransitionGroup>
        </div>
        <Dialog open={deleteDialogOpen} aria-labelledby='delete-dialog-title' onClose={this.closeDialogHandler}>
          <DialogTitle id='delete-dialog-title'>Are you sure you want to delete this palette?</DialogTitle>
          <DialogContent>'Cause once it's gone it's gone :(</DialogContent>
          <List>
            <ListItem button onClick={this.deleteHandler}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                  <CheckIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Delete'/>
            </ListItem>
            <ListItem button onClick={this.closeDialogHandler}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                    <CloseIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Cancel'/>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);