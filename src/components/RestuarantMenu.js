import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { RES_URL } from "../utils/constants";
import MenuListComponent from "./MenuListComponent";
import ShimmerMenu from "./ShimmerMenu";
import FooterComponent from "./FooterComponent";

const RestaurantMenu = () =>
{
    const [listOfMenu , setListOfMenu] = useState([]);
    const [showIndex , setShowIndex] = useState(null);
    const [resDetails , setResDetails] = useState({});
    const params = useParams();

    const resId = params.resId;
    useEffect (()=> {
        fetchMenu();
    },[]);

    if(listOfMenu.length === 0)
    {
        return <ShimmerMenu/>
    }

    let categories = [];

    async function fetchMenu ()
    {
        const data = await fetch(MENU_URL+resId);   
        const json  =  await data.json();
        setResDetails(json?.data?.cards[2]?.card?.card?.info)
        setListOfMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((r)=> r.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    
    }
    
    const {name, cuisines, cloudinaryImageId, avgRating, sla, areaName, city, costForTwo, labels }= resDetails
   
   
    
    
    let url = RES_URL+cloudinaryImageId;
    
    return (
        <div>
            <div className="mt-24 mx-72 h-48  bg-fixed" style={{backgroundImage:  'url("https://t4.ftcdn.net/jpg/08/93/79/37/360_F_893793791_KIDUk4JpI8pevxDwXtWyo961MANyEOkU.jpg")'}} >
            </div>
            <div className=" mx-72  opacity-100  font-serif text-white bg-gray-800 h-auto">
                <p className="py-2 ml-1 mt-1 font-bold text-3xl">{name}</p>
                <div className="mt-4 flex justify-between">

                    <div >
                        <div className="ml-4 flex items-center">
                            <p className=" w-11 rounded-md bg-yellow-200 text-black">★{avgRating}</p>
                            <p className=" font-bold font-mono text-sm">·{sla.slaString}</p>
                        </div>
                        <p className="ml-4 font-light text-sm">{cuisines.join(", ")}</p>
                        <p className="ml-4 font-light text-sm">cost for two : ₹ {costForTwo/100}</p>    
                    </div>

                    <div className=" py-6 mr-4 text-right">
                        <p className="font-light text-sm">{city}</p>  
                        <p className="font-light text-sm">{areaName}</p>
                       
                    </div>
                </div>                
            
           
                
            </div>
            <div className="mt-16">
                <p className="text-center">၌ ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯   <b className="font-serif">MENU</b>   ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯၌</p>
            </div>

            <div className=" mx-72 my-20 h-auto">
                    {listOfMenu.map((menu, index) => {
                        return <MenuListComponent key={menu.card.card.title} menu ={menu} showItems = {index == showIndex ? true : false} 
                        setShowIndex = { ()=> setShowIndex(index)}
    
                        />
                    })} 
            </div>
            <FooterComponent/>
        </div>
    )
    
}

export default RestaurantMenu;