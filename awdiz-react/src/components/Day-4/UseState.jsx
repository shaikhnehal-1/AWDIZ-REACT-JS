import { useState } from "react";

function UseState (){
    const [counter, setCounter] = useState(0);
    function Increment() {
        setCounter(counter + 1);
    }
    function Decrement() {
        setCounter(counter - 1);
    }
    function Reset() {
        setCounter(0);
    }

    return(
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Decrement}>-</button>
        </div>
    )
}

export default UseState;