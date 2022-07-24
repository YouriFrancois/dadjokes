// load the one joke view 

import React from 'react';
import { useLocation } from "react-router-dom";

function Single() {
    
    const location = useLocation() // to acces state 
    const {jokedata} = location.state // to get  data from state 

    return (
    <div className='back' >
      {/* ======================================= */}
  
     <h1 className='lijokes'> { jokedata}</h1>
      {/* ======================================= */}
    </div>)

}
export default Single;