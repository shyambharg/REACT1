
import { RESLIST_URL } from "./constants";
import { useState } from "react";
import { useEffect } from "react";


const useRestaurantList = () => {


    console.log(RESLIST_URL)
        const [resList , setResList] = useState([]);

        useEffect(()=> {
            fetchData();
        }, []);
    
        const fetchData = async () => {
            const data = await fetch(RESLIST_URL);
            const json = await data.json();
            setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        return resList;
};

export default useRestaurantList;