import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div className='navmain'>
    <li className='navli'>
      <Link to="/" className='navli'>Home</Link>
    </li>
    <li  className='navli'>
      <Link to="/search" className='navli'>Search</Link>
    </li>

    <li  className='navli'>
      <Link to="/random" className='navli'>Random Joke</Link>
    </li>

  </div>
  );
}
export default navbar;