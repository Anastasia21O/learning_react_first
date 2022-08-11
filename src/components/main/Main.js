import React from "react";
import Timer from "../timer/Timer";
import Toggle from "../toggle/Toggle"
import LoginControl from "../login_control/LoginControl";


const Main = ({name}) => {
    return (
        <div>
            <h1>Hi {name}</h1>
            <Timer/>
            <Toggle/>
            <LoginControl/>
        </div>
    )
};

export default Main