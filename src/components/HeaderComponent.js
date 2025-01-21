
import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const HeaderComponent = ()=>{


    //Main user name
    const {userName, setUserName} = useContext(UserContext);
    console.log(userName);

    const cart = useSelector((store)=> store.cart.items)


    return (
    <div >
        <div className="p-2 flex justify-between fixed top-0 left-0 right-0 bg-white ">


            <div className="flex">
                <Link to="/"> <img className="w-12 h-auto" src={LOGO_URL}></img> </Link>
                <div className="m-2  text-2xl flex">
                    
                    <p className="mr-1" >FOOD</p>                        
                    
                    <p className="font-extrabold">HIVE</p>

                </div>
            </div>

            <div className="m-2 p-2">
                <ul className="flex space-x-16 font-serif">
                    <li className="hover:underline"><Link style={{ textDecoration: 'none'}} to="/">Home</Link></li>
                    <li className="hover:underline"><Link style={{ textDecoration: 'none', color: "black"  }} to="/about">About Us</Link></li>
                    <li className="hover:underline"><Link style={{ textDecoration: 'none', color: "black"  }} to="/contact">Contact Us</Link></li>
                    <li className="hover:underline"><Link style={{ textDecoration: 'none', color: "black"  }} to="/cart">Cart {cart.length !=0 ? cart.length : ""}</Link></li>
                    {userName == "default" 
                        ? <li className="hover:underline"><Link style={{ textDecoration: 'none', color: "black"  }} to="/login">Sign In / Sign Up</Link></li> 
                        : <li className="hover:underline"><Link style={{ textDecoration: 'none', color: "black"  }} to="/">👤 {userName}</Link></li>   
                    }
                    {userName == "default" 
                        ? <div></div> 
                        : <li className="hover:underline"><Link style={{ textDecoration: 'none', color: "black"  }} to="/login" onClick={()=> {
                            setUserName("default")
                        }}>Logout</Link></li>   
                    }

                </ul>
            </div>
            
        </div>
       
    </div>
   );

};
export default HeaderComponent;