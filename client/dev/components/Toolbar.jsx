import React from 'react';
import {Link} from 'react-router-dom';

const Toolbar = ()=>{
  return(
    <div>
      <Link to='/'>Home</Link>
      <span>|</span>
      <Link to='/about'>About</Link>
    </div>
  )
}
export default Toolbar;
