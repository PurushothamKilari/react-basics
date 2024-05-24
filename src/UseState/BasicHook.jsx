import React,{useState} from "react";



const Index =()=> {
    const [count,setCount]=useState(0);

    const incrementCount=()=>{
        setCount((prev)=> prev+1);
        setCount((prev)=>{
            return prev+1
        });
    }
  return (
    <>
    <div  style={{ display: "flex", alignContent: "center", backgroundColor:'pink' }} > 
      <h1>Hooks Basic</h1>
      <div style={{fontSize:"40px", marginTop:'-10px'}}
      >
        <br>
        </br>
        <button style={{width:"40px", marginTop:'-10px'}} onClick={()=> setCount(count-1)}>-</button>
        <span>{count}</span>
        <button style={{width:"40px", marginTop:'-10px'}} onClick={incrementCount}>+</button>
      </div>
      </div>
    </>
  );
}

export default Index;
