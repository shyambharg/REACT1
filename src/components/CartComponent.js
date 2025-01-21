
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RES_URL } from "../utils/constants";
import { clearCart , removeItem} from "../utils/cartSlice";
import { Link } from "react-router";



const CartComponent = () =>{

 
    const cart = useSelector((store)=> store.cart.items)

    
    let total =0;
   
    
    console.log(cart)
    if(cart.length == 0)
    {
        return (
            <div className="text-center ">
                <p className="text-5xl font-bold font-serif mt-60">Cart is Empty</p>
                <Link to={"/"}> <button className="w-72 h-14  border-2 bg-blue-400 shadow-md hover:bg-blue-500 hover:shadow-2xl rounded-xl  mt-16 mb-14  "> Continue Shopping </button> </Link>
            </div>
        )
    }

    const dispatch = useDispatch();
    const  manageCart = ()=> {
        dispatch(clearCart())   
    }

    const removeItems = (index) => {
        dispatch(removeItem(index))
    }

    
    return (

        <div className=" mt-24  items-center mx-80">

            <div className="text-center">
                    <p className="text-3xl font-bold font-serif text-black">CART</p>
                    <button className="w-48 border-2 bg-red-300 hover:bg-red-500 rounded-md h-11  mt-4 mb-14" onClick={() => {
                        manageCart()
                    } }>Remove All</button>
            </div>
            
        
        
        {
        cart.map((item, index)=>{
            const {name,price,defaultPrice,ratings,imageId, description} = item.card?.info;
            total = total+(price ? price/100 : defaultPrice/100);
            return (

                <div key={item.card.info.id}>
                     <div className="h-auto w-full shadow-xl  my-5 flex flex-wrap justify-between">
                            <div className="ml-4 mt-4 p-2 w-8/12">
                                <p className="text-xl font-sans font-semibold"> {name} </p>
                                <p className=" text-lg mt-20" > ₹ {price ? price/100 : defaultPrice/100} </p>
                                
                           </div>
                            <div className=" flex ">
                                <img className="w-48 my-2 ml-2 h-40 rounded-tl-xl rounded-bl-xl" src={RES_URL+ item.card.info.imageId}></img>
                                <button className="w-10 my-2 h-40 rounded-tr-xl rounded-br-xl shadow-md bg-red-300 hover:bg-red-500 hover:shadow-lg" onClick={()=> {
                                    removeItems(index)
                                }}>X</button>
                            </div>

                    </div>
                    
                </div>
            )
        })

         }
            <div className="text-center"> 
                <p className="text-xl font-bold font-mono text-black">Total : ₹ {total}</p>
                <button className="w-48 border-2 bg-blue-200 hover:bg-blue-400 rounded-md h-11 ml-2 mt-4 mb-14">Check Out</button>
            </div>
        </div>
       
    )
}

export default CartComponent;