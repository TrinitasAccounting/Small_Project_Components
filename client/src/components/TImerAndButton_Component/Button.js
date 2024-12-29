
import { useState } from "react"

import TimerComponent from "./Timer"


function ButtonCounter() {

    // Functions for the button and counter

    // State for the current count
    const [counter, setCounter] = useState(0)


    // Add to the counter function onClick
    const handleClick = () => {
        setCounter(() => counter + 1)
    }

    console.log(counter)



    // Button disappears function

    // The state for our timer
    const [timer, setTimer] = useState("00:00:00");



    return (

        <div className="center">
            <TimerComponent timer={timer} setTimer={setTimer} counter={counter} />
            {timer == "0" ? <></> : <button onClick={handleClick} style={{ textAlign: "center", margin: "auto", position: "absolute", left: "50%", padding: '7px' }}>+</button>}
        </div>
    )
}

export default ButtonCounter;