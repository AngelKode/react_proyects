import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const Callback = () => {

    const [counter, setCounter] = useState(10);  
    
    const handleIncrement = useCallback((factor = 1) => {
        setCounter((prev) => prev + factor);
    },[]);

    return (
        <>
            <hgroup>
                <h1>UseCallback Hook: {counter}</h1>
                <h2>Learning useCallback function</h2>
            </hgroup>

            <ShowIncrement increment={handleIncrement}/>
        </>
    )
}
