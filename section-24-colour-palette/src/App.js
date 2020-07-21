import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { generatePalette } from './colorHelpers';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedsColors';
import SingleColorPalette from './SingleColorPalette';



const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

class App extends Component {
  state = {
    palettes: savedPalettes || seedColors
  };

  findPalette = (id) => {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  deletePaletteHandler = (id) => {
    this.setState(
      st => ({palettes: st.palettes.filter(palette => palette.id !== id)}),
      this.syncLocalStorageHandler
    )
  }

  savePaletteHandler = (newPalette) => {
    this.setState({palettes: [...this.state.palettes, newPalette]},
      this.syncLocalStorageHandler);
  }

  syncLocalStorageHandler = () => {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location}>
              <Route exact path='/palette/new' render={routeProps => (
                <Page>
                  <NewPaletteForm savePalette={this.savePaletteHandler} {...routeProps} palettes={this.state.palettes}/>
                </Page>
              )}/>
              <Route exact path='/' render={(routeProps) => (
                <Page>
                  <PaletteList palettes={this.state.palettes} deletePaletteHandler={this.deletePaletteHandler} {...routeProps}/>
                </Page>
              )}/>
              <Route exact path='/palette/:id' render={routeProps => (
                <Page>
                  <Palette 
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.id)
                      )}
                    />
                </Page>
              )}/>
              <Route exact path='/palette/:paletteId/:colorId' render={routeProps => (
                <Page>
                  <SingleColorPalette 
                    colorId={routeProps.match.params.colorId}
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.paletteId)
                      )}
                  />
                </Page>
              )}/>
              <Route render={(routeProps) => (
                <Page>
                  <PaletteList palettes={this.state.palettes} deletePaletteHandler={this.deletePaletteHandler} {...routeProps}/>
                </Page>
              )}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
    );
  }
}

export default App;
