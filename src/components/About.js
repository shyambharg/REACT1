import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (

        
        <div className="back">
            
            <div className="h-72 w-full bg-center bg-cover bg-fixed" style={{backgroundImage:  'url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg")', opacity:0.5}} >
            
            </div>
            
            <div className="text-center py-16 text-7xl opacity-100  font-serif text-white bg-black">
                <p> FOOD at your door step....</p>    
                </div>
    
                <div className="h-72 w-full bg-center bg-cover bg-fixed" style={{backgroundImage:  'url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg")', opacity:0.5}} >
                
                </div>
        
    
    
            <h1>About</h1>
            <div className="user-container">
               <User name={"Shyam Functional"}/>
               <UserClass name={"Shyam Class"}/>
            </div>
       </div>
    )
}

export default About;