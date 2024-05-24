import React,{useState} from "react";



const DataShow=()=>{
    const [showData, setShowData]= useState(false);

    const hideData=()=>{
        setShowData(!showData);
    }
    return <>
    <div>
        <button onClick={hideData}>{showData?'Hide it': 'show it'}</button>
        {
            showData && ( <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis adipisci beatae deserunt, nihil nesciunt dicta, maxime dignissimos esse nemo numquam necessitatibus provident ducimus ipsa voluptatum, rerum molestias nam facere.</h2>)

        
        }
        {
            !showData&&(<h2>Hello it is hidden</h2>
                )
        }
       </div></>
}

// const AdvIndex= ()=>{
//     const initalObj={
//         FirstName:"purushotham",
//         LastName:"Chowdary"
//     }
//     const [data,setData]=useState(initalObj);

//     const changeFirstName =()=>{
//         setData({
//             ...data,
//             FirstName:"Mukesh"
//         })
//     }
//     return <>
//     <div>
//         <h1>hello</h1>
//         <h2>User First name :{data.FirstName}</h2>
//         <h2>User Last Name:{data.LastName}</h2>
//         <button onClick={changeFirstName}>changeFirstName</button>
//     </div>
//     </>
// }

export default DataShow