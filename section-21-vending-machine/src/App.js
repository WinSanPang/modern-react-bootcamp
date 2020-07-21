import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import VendingMachine from './VendingMachine';
import Crisps from './Crisps';
import Chocolate from './Chocolate';
import Lollipop from './Lollipop';
import Layout from './Layout';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      {/* <Layout> */}
      <NavBar/>
        <Switch>
          <Route path='/' exact render={() => <VendingMachine/>}/>
          <Route path='/crisps' exact render={() => <Crisps/>}/>
          <Route path='/chocolate' exact render={() => <Chocolate/>}/>
          <Route path='/lollipop' exact render={() => <Lollipop/>}/>
        </Switch>
      {/* </Layout> */}
    </div>
  );
}

export default App;
