import React from "react";
import ReactDOM from "react-dom/client"
import {RES_URL} from "../utils/constants"

const RestaurantCard  = (props) => {

    const {resData} = props 

    const{ name, avgRating, cuisines, sla, cloudinaryImageId } = resData?.info
    
    return(
        <div className=" m-6 h-72 w-52 bg-white rounded-3xl shadow-lg hover:shadow-2xl "  >
            
            <img className= "w-full h-32" src={RES_URL + cloudinaryImageId}></img>
            <div className="mt-2 ml-2">
                <p className="font-bold text-l font-serif">{name}</p>
                <div className="flex items-center">
                    <p className="w-11 rounded-md bg-yellow-200">★{avgRating}</p>
                    <p className="ml-2 font-bold font-mono text-sm">·{sla.slaString}</p>
                </div>
                <p className="mt-4 font-light text-sm">{cuisines.join(", ")}</p>
            </div>
            
        </div>   
    );
}

export default RestaurantCard;