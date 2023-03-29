import { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";

const heavyStuff = ( iterationNumber = 100) => {
    for(let i = 0; i < iterationNumber; i++){
        console.log(i);
    }
    return `${iterationNumber} iteration`
}

export const MemoHook = () => {

    const {counter,handleIncrement} = useCounter(4000);

    const [show, setShow] = useState(true);
    
    const memorizedValue = useMemo(() => heavyStuff(counter),[counter])

    return (
        <>
            <h1>Counter: {counter}</h1>

            <h4>{memorizedValue}</h4>

            <button onClick={() => handleIncrement()}>
                +1
            </button> 
            <button onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>       
        </>
    )
}
