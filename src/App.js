import React,{useState} from "react";
// import ShowTime from "./ShowTime";
import ShowPost from "./ShowPosts";
// function App(){
//   return React.createElement('h1',{className:'heading'},"Hello");
// }

// function App(){
//   return React.createElement('div',{className:'container'},React.createElement('h1',{className: 'heading'},'Hello world from React'));
// }
// function clickHandler(e,firstName){
//   console.log("you clicked the button",e,firstName);
// }

function App() {
  const [count,setCount]=useState(7);
  return ( 
  <div className="App">
    <h2 style={{margin:"100px"}}>Count value is {count}</h2>
    <button className="button" onClick={()=> setCount(count+1)
    }>Click Me</button>
    <ShowPost/>
  </div>
  );
}

export default App;
