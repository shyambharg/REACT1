
import React from "react";
import MenuComponent from "./MenuComponent";

const ShimmerMenu = () =>{
    return (
        <div>
        <div className="mx-72 h-48  bg-fixed" style={{backgroundImage:  'url("https://t4.ftcdn.net/jpg/08/93/79/37/360_F_893793791_KIDUk4JpI8pevxDwXtWyo961MANyEOkU.jpg")', opacity: 0.8}} >
        </div>
        <div className=" mx-72  opacity-100  font-serif text-white bg-gray-800 h-36">
            <p className="py-2 ml-1 mt-1 font-bold text-3xl"></p>
            <div className="mt-4 flex justify-between">

                <div >
                    <div className="ml-4 flex items-center">
                        <p className=" w-11 rounded-md bg-yellow-200 text-black">★{}</p>
                        <p className=" font-bold font-mono text-sm">·</p>
                    </div>
                    <p className="ml-4 font-light text-sm"></p>
                    <p className="ml-4 font-light text-sm">cost for two : ₹</p>    
                </div>

                <div className=" py-6 mr-4 text-right">
                    <p className="font-light text-sm"></p>  
                    <p className="font-light text-sm"></p>
                   
                </div>
            </div>                
        
       
            
        </div>
        <div className="mt-16">
            <p className="text-center">၌ ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯   <b className="font-serif">MENU</b>   ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯၌</p>
        </div>

        <div className=" mx-72 my-20 h-auto">
           
          

        </div>
    </div>
    )
}

export default ShimmerMenu;