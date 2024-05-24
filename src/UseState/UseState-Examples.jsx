import React from "react";


const  Index =()=>{
    return (
        <>
        <div>
            <form>
                <div className="form-content">
                <input type = "text"
                name="firstName"
                id="firstName"
                placeholder="Enter your name">
                </input>
                <div className="form-content">
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                aria-label="sam">
                </input>
                </div>
                <div className="form-content">
                <input type="password"
                name="password"
                id="password"
                placeholder="passwd"
                 />
                 <div className="form-content">
                 <button>Submit</button>
                 </div>
                 </div>
                 </div>
            </form>
        </div>
        </>
    )
}


export default Index