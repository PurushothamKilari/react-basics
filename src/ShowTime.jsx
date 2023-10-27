import React from "react";
import BeastMode from "./BeastMode";
const InnerComponent =(props)=>{
    console.log(props);
    return <> <div className="movie-container"><MovieImage/><p>{props.title}</p></div></>;
}

const MovieImage =()=>{
    return <img src ="https://occ-0-7275-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZooZsfnSotsmmgDciku0aI-g2DaH6XnbcFfEq9W6MyfCtyM10hQEVXAsbCWn-HhGK39VbhEb1wlCelh8zKPW6IjhXgTRwgoIR0.jpg?r=278" alt="netflix"/>
}

function ShowTime() {
  return ( 
  <div className="movie-container">
    <BeastMode/>
    <BeastMode/>
    <BeastMode/>
    <p>{new Date().toLocaleTimeString()}</p>
    <InnerComponent title="Beast(Telugu)" />
    {/* <InnerComponent />
    <InnerComponent />
    <InnerComponent /><InnerComponent />
    <InnerComponent /> */}
  </div>
  );
}

export default ShowTime;
