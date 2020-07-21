import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';

import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
  state = {
    copied: false
  }

  copyStateHandler = () => {
    this.setState({ copied: true}, () => {
      setTimeout(() => this.setState({copied: false}), 2200);
    });
  }

  render() {
    const { name, background, moreUrl, showFullPalette, classes} = this.props;
    const { copied } = this.state;

    return (
        <CopyToClipboard text={background} onCopy={this.copyStateHandler}>
          <div 
            className={classes.colorBox}
            style={{ background }}>
            <div 
              style={{ background }}
              className={classNames(classes.copyOverlay, {
                [classes.showOverlay]: copied})}
              />
            <div className={classNames(classes.copyMessage, {
                [classes.showCopyMessage]: copied})}>
              <h1>Copied!</h1>
              <p className={classes.copyText}>
                {background}
              </p>
            </div>
            <div>
              <div className={classes.boxContent}>
                <span className={classes.colorNameText}>{name}</span>
              </div>
              <button className={classes.copyButton}>COPY</button>  
            </div>
            {showFullPalette && (
              <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                <span className={classes.seeMore}>MORE</span></Link>
            )}
          </div>
        </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);