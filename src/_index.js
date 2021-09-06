import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss"

const App = () => {

    const env = process.env.NODE_ENV;
    return <div>
        <p>manonhar</p>
        <h1>{env}</h1>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))