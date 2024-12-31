




const heading = React.createElement("div" , {id : "parent"}, [React.createElement("div", {id : "child"}, [React.createElement("h1" , {}, "Hello world I m h1 tag"),React.createElement("h2" , {}, "Hello world I m h2 tag")]),React.createElement("div", {id : "child2"}, [React.createElement("h1" , {}, "Hello world I m h1 tag"),React.createElement("h2" , {}, "Hello world I m h2 tag")])])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)