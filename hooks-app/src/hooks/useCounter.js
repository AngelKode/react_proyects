import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const handleIncrement = (factorValue = 1) => {
        setCounter((previousValue) => previousValue + factorValue);
    }

    const handleDecrement = (factorValue = 1) => {
        setCounter((previousValue) => {
            if(previousValue === 0) return previousValue;
            return previousValue - factorValue
        });
    }

    const handleResetValue = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleResetValue
    }
}