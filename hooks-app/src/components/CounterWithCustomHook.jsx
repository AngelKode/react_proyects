import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {counter, handleIncrement, handleDecrement,handleResetValue} = useCounter(10);

    return (
        <>
            <h1>Counter with Custom Hook: {counter}</h1>
            <div className="grid">
                <button className="outline" onClick={() => handleDecrement()}>
                    -1
                </button>
                <button className="contrast" onClick={handleResetValue}>
                    Reset
                </button>
                <button onClick={() => handleIncrement()}>
                    +1
                </button>
            </div>
        </>
    )
}
