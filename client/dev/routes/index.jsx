import React from 'react';
import Home from './home';
import About from './about';
import Login from './login';

import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Routes = ()=>{
  return(
    <Router>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/about' exact component={About}/>
        <Route path='/login' exact component={Login}/>
      </Switch>
    </Router>
  )
}

export default Routes;
