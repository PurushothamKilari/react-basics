import React,{useState} from "react";



const AdvIndex= ()=>{
    const initalObj={
        FirstName:"purushotham",
        LastName:"Chowdary"
    }
    const [data,setData]=useState(initalObj);

    const changeFirstName =()=>{
        setData({
            ...data,
            FirstName:"Mukesh"
        })
    }
    return <>
    <div>
        <h1>hello</h1>
        <h2>User First name :{data.FirstName}</h2>
        <h2>User Last Name:{data.LastName}</h2>
        <button onClick={changeFirstName}>changeFirstName</button>
    </div>
    </>
}

export default AdvIndex