import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => (<title>React App</title>)

const Jsxheading = () => 
(
    <div>
        <Title/>
        <h1 id ="heading">Nameste React from JSX as Fucntional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Jsxheading/>)