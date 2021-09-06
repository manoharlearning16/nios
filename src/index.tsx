import React, {FunctionComponent} from "react";
import ReactDOM from "react-dom";
import "./styles.scss"

const App:FunctionComponent = () => {

    const env = process.env.NODE_ENV;
    return <div>
        <p>manohar is in canada</p>
        <h1>{env}</h1>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))