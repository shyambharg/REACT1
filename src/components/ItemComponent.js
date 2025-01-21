import React from "react";
import { RES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemComponent = (props) => {

    const dispatch = useDispatch();

    const handleItem = (item) => {
        dispatch(addItem(item))
    }

    const item = props.item;

    const {name, price,defaultPrice,description, ratings} = item?.card?.info;
    return (
        <div className="h-48 w-full shadow-xl  my-5 flex flex-wrap justify-between">
            <div className="ml-4 mt-4 p-2 w-8/12">
                <p className="text-xl font-sans font-semibold"> {name} </p>
                <p > ₹ {price ? price/100 : defaultPrice/100} </p>
                <p className="text-justify text-xs mt-4 font-sans">{description}</p>
                <p className="text-xs mt-8">★{ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})</p>
             


            </div>
            <div>
            <button className="absolute bg-white border-black shadow-md  w-28 h-11 rounded-lg text-green-400 hover:bg-gray-100 text-base ml-12 mt-36 " onClick={()=>{
                handleItem(item)
            }}>ADD</button>
               <img className="w-48 m-2 h-40 rounded-xl" src={RES_URL+ item.card.info.imageId}></img>
               
            </div>
        </div>
    )
}

export default ItemComponent;