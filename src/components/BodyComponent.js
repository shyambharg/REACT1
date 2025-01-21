import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";

import { Link } from "react-router";
import { RESLIST_URL } from "../utils/constants";
import FooterComponent from "./FooterComponent";

const BodyComponent = () => {
 
    const [searchText, setSearchText] = useState("");
 
    const [resList , setResList] = useState([]);
    const [dupResList , setDupResList] = useState([]);
    
            useEffect(()=> {
                fetchData();
            }, []);
        
            const fetchData = async () => {
                const data = await fetch(RESLIST_URL);
                const json = await data.json();
                setResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
                setDupResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            }


    if(resList.length ==0)
    {
        return <div>
            <Shimmer/>
            
        </div>
    }

return (
    
    <div>
        
        <div className="h-48 mt-24 w-full bg-center bg-cover bg-fixed" style={{backgroundImage:  'url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg")'}} >
            
            </div>
            
            <div className="text-center py-6 text-5xl opacity-100  font-serif text-white bg-gray-800 h-24">
                <p> FOOD at your door step....</p>    
                </div>
    
                <div className="h-48 w-full bg-center bg-cover bg-fixed" style={{backgroundImage:  'url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg")'}} >
                
                </div>

        
        
        <div className="p-2 mt-8 w-full flex items-center justify-center ">
            <input className="p-2 mt-2 w-96 border-2 rounded-lg " placeholder="Search Restaurants...." value={searchText} onChange={(e) => {
                setSearchText(e.target.value)    
                }}></input>
            <button className="w-48 border-2 bg-yellow-50 hover:bg-yellow-200 rounded-md h-11 ml-2 mt-2" onClick={()=>{
            
             const filterRes = dupResList.filter((resData)=>{
                return resData.info.name.toLowerCase().includes(searchText.toLowerCase());
             })
             setResList(filterRes);
            }}>Search</button>

            <button className="w-48 border-2 bg-red-50 hover:bg-red-400 rounded-md h-11 ml-2 mt-2" onClick={()=>{
            setSearchText("");
            setResList(dupResList);
           }}>Clear</button>
       

      
            {/* <button className="button" onClick={ () => {
                console.log(listOfRes)
                const filteredRes = listOfRes.filter( (res) => res.info.avgRating>4.3);
                setListOfRes(filteredRes);
                console.log("button clicked")
                console.log(filteredRes)
            }}>
                Popular Restaurants
            </button> */}



            </div>
      
         <div className="mt-11 ml-16 flex flex-wrap items-center">
            {
                resList.map((resData) => <Link style={{ textDecoration: 'none' }} to={"/restaurant/" + resData.info.id} key={resData.info.id} > <RestaurantCard resData = {resData}/> </Link>)
            }  
        </div>
           
    <FooterComponent/>
    </div>
    
)
    
    }

export default BodyComponent;