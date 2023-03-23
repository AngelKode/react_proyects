import React from 'react'
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {

    const {data,isLoading,hasError} = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/10');

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                isLoading && <h1>Loading...</h1>
            }
            <div className='parent' hidden={isLoading}>
            {
                !isLoading &&
                data.map(({quote,author},i) => {
                    return (
                        <article key={i}>
                            <header>{author}</header>
                            <p>"{quote}"</p>
                        </article>
                    )
                })
            }
            </div>
        </>
    )
}; 