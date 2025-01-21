
import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent.js";
import BodyComponent from "./components/BodyComponent.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About.js";
import Error from "./components/Error.js";
import ContactUs from "./components/ContactUs.js";
import RestaurantMenu from "./components/RestuarantMenu.js";
import FooterComponent from "./components/FooterComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import UserContext from "./utils/UserContext.js";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";
import CartComponent from "./components/CartComponent.js";

const AppLayout = () => {
    
    
    const [userName, setUserName] = useState("default"); 
    
    return(
    <div className="applayout">
        <title>Swiggy</title>
        <Provider store={appStore}>
        <UserContext.Provider value={{userName : userName, setUserName}}>
            <HeaderComponent/>
            <Outlet/>
        </UserContext.Provider>
        </Provider>
    </div>
  )
}

const appRouter = createBrowserRouter(
    [
        {
            path : "/",
            element : <AppLayout/>,
            errorElement : <Error/>,
            children : [
                    {
                        path : "/",
                        element : <BodyComponent/>
                    },
                    {
                        path : "/about",
                        element: <About/>
                    },
                    {
                        path : "/contact",
                        element: <ContactUs/>
                    },
                    {
                        path : "/restaurant/:resId",
                        element : <RestaurantMenu/>

                    },
                    {
                        path : "/login",
                        element : <LoginComponent/>

                    },
                    {
                        path : "/cart",
                        element : <CartComponent/>
                    }
                ]
        }
        

    ]
)

const root  = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)