
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './index.css';

function App() {
  const [about, setabout] = useState('');
  // const [jokes, setJokes] = useState('');

  const handleChange = event => {
    setabout(event.target.value); // update text box
  };


  return (
    <div  className="app">
      {/* ======================================= */}
      <div  className="boxtext">
     <h1 className="texti">Real DAD JOKE</h1>
     <h1 className="texti">Pick A Word</h1>
{/* ======================================= */}
<input  type ="text" className="texti" onChange={handleChange}  >
</input> 


     <Link to= { about?"/jokes":"/"}   // check to see text box is empty to go to the rigt path 
  
    //  className={ about? "no-link " : "no-link "}
    state={{ jokedata:about }}>   <button  className="bt" >search   </button>
     </Link>      
     {/* pass user inpute to the next component  */}

  </div>
  {/* ======================================= */}
    </div>
    
  );
}

export default App;
