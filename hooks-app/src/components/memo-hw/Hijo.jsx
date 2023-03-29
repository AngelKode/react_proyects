import { memo } from "react";

export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="secondary"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
