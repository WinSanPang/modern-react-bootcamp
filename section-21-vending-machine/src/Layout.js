import React from 'react';

import NavBar from './NavBar';

const layout = props => {
  return (
    <div>
      <NavBar>
        <main>
          {props.children}
        </main>
      </NavBar>
    </div>
  )
}

export default layout;