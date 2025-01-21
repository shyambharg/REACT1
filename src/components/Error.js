import { useRouteError } from "react-router"
import React from "react";

const Error  = () => {

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops...</h1>
            <h2>Something went wrong..</h2>
            <h2>{err.status}</h2>
            <h2>{err.statusText}</h2>
        </div>
    )
}

export default Error;