import React from 'react';
import MainMenu from './components/MainMenu';
import Kitchen from './components/Kitchen';
import Waiters from './components/Waiters';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  /* Link,
  NavLink */
} from "react-router-dom";

function App() {

    return (
      <Router>
    <div className='container'>
      <Switch>
       <Route  exact path='/' component={MainMenu}/>

       <Route path='/kitchen'component={Kitchen}/>
      
       <Route path='/waiters' component={Waiters}/>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
