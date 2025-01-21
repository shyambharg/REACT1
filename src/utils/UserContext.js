import React, { createContext } from "react";


const UserContext = createContext(
    {
        userName : "default",
        password : ""
    }
);

export default UserContext;