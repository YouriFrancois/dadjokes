import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div className='navmain'>

      <Link to="/" className='link1'>
        <li className='navli'>Home   </li>
       </Link>
 
      <Link to="/search" className='link1'>    
       <li  className='navli'>Search </li>
      </Link>

      <Link to="/random" className='link1'>
        <li  className='navli'> Random Joke  </li> 
       </Link>


  </div>
  );
}
export default navbar;