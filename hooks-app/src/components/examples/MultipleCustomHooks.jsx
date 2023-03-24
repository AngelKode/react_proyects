import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {

    const [url] = useState('https://api.breakingbadquotes.xyz/v1/quotes/1')
    const {data,isLoading,getFetch} = useFetch(url);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            <div className='parent' aria-busy={isLoading}>
                {
                    !isLoading &&
                    <Quote data={data}/>
                }
                <button className='contrast' onClick={() => {getFetch(url)}}>
                    Next Quote
                </button>
            </div>
        </>
    )
}; 