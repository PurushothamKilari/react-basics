import React from "react";
import Data from "./data.json"




const ShowPost =()=>{
    return (
        <main className="container">
            <ul className="comments-Container">
                {
                    Data.map((obj)=>{
                        const {id, email, name, body}=obj;
                        return <li key={id}className="comment">
                            <div className="comment-header">
                            <h3 className="email">{email}</h3>
                            <h3 className="name">{name}</h3>
                            </div>
                            <p className="message">{body}</p>
                        </li>
                    })
                }
                {/* <li className="comment">
                    <div className="comments-header">
                        <h3>email@email.com</h3>
                        <h3>some name random name</h3>

                    </div>
                    <p className="message"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam est quaerat obcaecati quod nam omnis quam ducimus eum illum.</p>

                </li> */}

            </ul>
        </main>
    );
}


export default ShowPost