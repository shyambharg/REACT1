import React from "react";
import ItemComponent from "./ItemComponent";


const MenuComponent = (props) =>{

    const menu = props.menu?.card?.card?.itemCards;

    console.log(menu);
    return (
        <div className="h-auto">
            {menu.map((item) => {
                return <ItemComponent key = {item.card.info.id} item= {item}/>
            })}
        </div>
    )
}

export default MenuComponent;