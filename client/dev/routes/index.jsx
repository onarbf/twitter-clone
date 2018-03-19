import React from 'react';
import Home from './home.jsx';
import About from './about.jsx';

import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Routes = ()=>{
  return(
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
      </Switch>
    </Router>
  )
}

export default Routes;
