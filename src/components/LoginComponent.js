import React, { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const LoginComponent = () => {

    const [user , setUser] = useState("")

    const {userName , setUserName} = useContext(UserContext);

   

    return(
        
        <div className="flex justify-center h-auto bg-center bg-cover bg-fixed bg-repeat" style={{backgroundImage:  'url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg")'}}>
            <div className=" bg-gray-100 shadow-xl w-3/12 h-96 mt-36 mb-36 rounded-3xl">
                <p className="text-center mt-6 text-2xl text-black font-mono font-bold">LOGIN</p>
                <p className="ml-8 mt-10">Username</p>
                <input className="mt-2 ml-8 w-9/12 h-10 rounded-sm border border-black shadow-2xl text-xl font-serif" onChange={(e)=>{
                    setUser(e.target.value)
                }}></input>
                <p className="ml-8 mt-4">Password</p>
                <input className="mt-2 ml-8 w-9/12 h-10 rounded-sm border border-black shadow-2xl text-xl font-serif " type="password"></input>
                <br></br>
                <Link to={"/"}> <p className="  cursor-pointer w-40 h-10 mt-10 ml-24 p-2 bg-blue-400 text-center font-extrabold font-serif rounded-lg shadow-md hover:shadow-2xl hover:bg-blue-500 " onClick={
                   ()=> {
                    if(user.length==0){
                        alert("Please enter a valid Username and Password");
                        setUserName("default")
                    }
                    else{
                        setUserName(user);
                    }

                   }
                }>Login</p></Link>
            </div>
        </div>
        
    )
}

export default LoginComponent;