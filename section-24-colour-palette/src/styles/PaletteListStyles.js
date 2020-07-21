import sizes from './sizes';
import background from './Background.svg';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    /* background by SVGBackground */
    backgroundColor: '#ffcb6e',
    backgroundImage: `url(${background})`,
    overflow: 'scroll'
  },
  heading: {
    fontSize: '1.5rem',
  },
  container: {
    width: '60%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '70%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: '2%',
    color: 'white',
    backgroundColor: 'rgba(54, 25, 25, 0.5)',
    alignItems: 'center',
    "& a": {
      textDecoration: 'none',
      color: 'white',
      border: '3px solid white',
      borderRadius: '20px',
      padding: '10px 15px',
      backgroundColor: 'steelblue'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 22.4%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
      gridGap: '1.5rem'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1rem'
    }
  }
}