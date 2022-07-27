// load all the joke from the api here

import React,{useState,useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import {getjokes} from "./API/jokes"
import './index.css';

function Jokes() {
    const [jokes, setJokes] = useState([{joke:"no Joke found"}]);
  const location = useLocation()
  const {jokedata} = location.state 

  useEffect(() => {
    //console.log(jokedata)
    getjokes(jokedata).then(jk =>  {  //console.log(jk);
      if(jk==""|| jk===null){setJokes([{joke:"no Joke found"}])}
      else{setJokes(jk)}
    })
  }, []);
//  console.log("yess")
 // console.log(jokes)

  return (
    <div className='back'>
{/* ======================================= */}
 <div className='subnav'><h1>Result for :" {jokedata} "</h1></div>
 <div className='subnav'><h1>Number of Jokes :{jokes.length}</h1></div>
{/* ======================================= */}
      <ul>
      {jokes.map((jk) => 
        <Link  to= { jk.joke==="no Joke found"?"/":"/single"}
        state={{jokedata:jk.joke  }} className="link1"> 
        <li key={jk.id} className="lijokes">
     {jk.joke}
        </li>
      </Link> 
      )}
    </ul>
{/* ======================================= */}

    </div>
  );
}
export default Jokes;