import React from "react";
import Timer from "../timer/Timer";
import Toggle from "../toggle/Toggle"


const Main = ({name}) => {
    return (
        <div>
            <h1>Hi {name}</h1>
            <Timer/>
            <Toggle/>
        </div>
    )
};

export default Main