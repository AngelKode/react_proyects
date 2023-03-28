import Proptypes from 'prop-types'
import { useRef, useState } from 'react';
import { useLayoutEffect } from 'react'

export const Quote = ({data}) => {

    const articleTextRef = useRef();

    const [boxSize, setBoxSize] = useState({
        width : 0,
        height : 0
    })

    useLayoutEffect(() => {
        
        const {height, width} = articleTextRef.current.getBoundingClientRect();
        setBoxSize({height, width});
        
        return () => {
            console.log('new quote');
        };

    }, []);

    return (
        <>
            {
                data.map(({quote,author},dataIndex) => {
                    return (
                        <article key={dataIndex}>
                            <header>-{author}-</header>
                            <p ref={articleTextRef}>"{quote}"</p>
                        </article>
                    )
                })
            }
            <code>
                {JSON.stringify(boxSize)}
            </code>
        </>
    )
}

Quote.propTypes = {
    data : Proptypes.array.isRequired
}
