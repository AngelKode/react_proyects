import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {

    const {counter,handleIncrement} = useCounter(10);

    const [show, setShow] = useState(true);
    
    return (
        <>
            <h1>Counter: <Small value={counter}/> </h1>
            <button onClick={() => handleIncrement()}>
                +1
            </button> 
            <button onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>       
        </>
    )
}
