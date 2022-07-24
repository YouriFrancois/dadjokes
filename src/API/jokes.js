// api call dad joke 


async function getjokes( about) {
    const response = await fetch('https://icanhazdadjoke.com/search?term='+about,{
        headers:{
            accept:"application/json" // to get json 
        }
    });
    // waits until the request completes...
    const jokes = await response.json()  
   
    return jokes.results

  }

  export default getjokes;