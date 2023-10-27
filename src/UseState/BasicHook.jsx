import React,{useState} from "react";



const Index =()=> {
    const [count,setCount]=useState(0)

    const incrementCount=()=>{
        setCount((prev)=> prev+1);
        setCount((prev)=>{
            return prev+1
        });
    }
  return (
    <>
      <h1>Hooks Basic</h1>
      <div
        style={{ alignContent: "center", margin: "200px", padding: "200px", color:'red' }}
      >
        <button onClick={()=> setCount(count-1)}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  );
}

export default Index;
