import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 2,
        }
    }
    render()
    {
        return(
            <div className="user-card">
                <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count +1,
                    })
                }}>Increase Count</button>
                <h1>Class Component</h1>
                <h2>{this.props.name}</h2>
                <h4>Age 25</h4>
                </div>
            </div>
        )
    }
}

export default UserClass;