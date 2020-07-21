import React from 'react';
import { withStyles } from '@material-ui/styles'

import styles from './styles/PaletteFooterStyles';


function Footer(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.paletteFooter}>
        {paletteName}
        <span className={classes.paletteEmoji}>
          {emoji}
        </span>
    </footer>
    );
  }

export default withStyles(styles)(Footer);