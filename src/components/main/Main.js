import React from "react";
import Timer from "../timer/Timer";


const Main = ({name}) => {
    return (
        <div>
            <h1>Hi {name}</h1>
            <Timer/>
        </div>
    )
};

export default Main