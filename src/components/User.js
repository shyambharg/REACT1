import React from "react";
const User = (props)=>{
    
    const {name} = props;
    return(
        <div className="user-card">
            <div>
                <h1>Functional Component</h1>
            <h2>{name}</h2>
            <h4>Age 25</h4>
            </div>
        </div>
    )
}

export default User;