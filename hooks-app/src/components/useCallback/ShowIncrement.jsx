import { memo } from "react";

export const ShowIncrement = memo(({increment}) => {
    console.log('Me genere:(');
    return (
        <button onClick={() => increment(5)}>
            Add
        </button>
    )
})
