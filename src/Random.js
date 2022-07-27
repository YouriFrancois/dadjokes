import React,{useState,useEffect} from 'react';

import {randomjokes} from "./API/jokes"
import './index.css'

function Random() {
    const [jokes, setJokes] = useState([{joke:"no Joke found"}]);
    const [click, Setclick] = useState(true);

    useEffect(() => {
        randomjokes().then(jk =>  {  
            
          if(jk===""|| jk===null){setJokes([{joke:"no Joke found"}])}
          else{setJokes({joke:jk})}
        })
      }, [click]);

      const handleClick = event => {
        Setclick(!click);
      };
  

    return (
    <div className='back' >
      {/* ======================================= */}
   <div className='subnav'>    <h1>Random joke</h1> </div>
{/* ======================================= */}
      {/* ======================================= */}
    <div> <h1 className='lijokes'>{jokes.joke} </h1></div>
      {/* ======================================= */}
    <button  className="bt2" onClick={handleClick} >Random   </button>
    </div>)

}
export default Random;