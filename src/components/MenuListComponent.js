import React, { useState } from "react";
import MenuComponent from "./MenuComponent";

const MenuListComponent = (props) => {


    const showItems = props.showItems;
    const menu = props.menu;
    const setShowIndex = props.setShowIndex;

    const changeShowMenu = () =>{
        setShowIndex();
    }   

    return (
        <div className="">
            
            <div className="w-full h-16 shadow-md border-2 text-black  my-4 flex justify-between rounded-lg cursor-pointer" onClick={changeShowMenu}>
                <p className="m-4 font-extrabold"> {menu.card.card.title} ({menu.card.card.itemCards.length})</p>
                {showItems ? <span className="font-bold text-lg m-4">🔼</span> : <span className="font-bold text-lg m-4">🔽</span> }
            </div>

            { showItems && <MenuComponent menu = {menu} />}
        </div>
    )

}

export default MenuListComponent;