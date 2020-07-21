import sizes from './sizes';

export default {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },
  
  navbarLogo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    font: 'roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    [sizes.down('xs')]: {
      display: 'none'
    }
  },
  
  navbarSlider: {
    width: '340px',
    margin: '0 20px',
    display: 'inline-block',
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      backgroundColor: 'lightseagreen',
      outline: 'none',
      border: '2px solid lightseagreen',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginLeft: '-7px',
      marginTop: '-3px',
    },
    [sizes.down('sm')]:{
      width: '150px'
    }
  },
  
  navbarSelectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  }
};