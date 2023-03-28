import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef1 = useRef();
    const inputRef2 = useRef();

    const handleOnClick = () => {
        console.log(inputRef1.current);
        console.log(inputRef2.current);
    }

    return (
        <>
            <hgroup>
                <h1>Focus Screen</h1>
                <h2>Using useRef hook</h2>
            </hgroup>
            

            <input type="text"
                   placeholder="Input 1"
                   ref={inputRef1}
            />

            <input type="text"
                   placeholder="Input 2"
                   ref={inputRef2}
            />

            <button onClick={handleOnClick}>
                    Set focus input 1 & 2
            </button>
        </>
    )
}
