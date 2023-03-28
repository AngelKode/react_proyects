import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { Quote } from '../examples/Quote';

export const Layout = () => {

    const [url] = useState('https://api.breakingbadquotes.xyz/v1/quotes/1')
    const {data,isLoading,getFetch} = useFetch(url);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            <div className='parent'>
                {
                   isLoading &&
                   <span aria-busy={isLoading} 
                         style={{marginBottom:'20px'}}>
                        Loading quote…
                    </span>
                }
                {
                    !isLoading &&
                    <Quote data={data}/>
                }
                <button className='contrast' 
                        disabled={isLoading} 
                        onClick={() => {getFetch(url)}}>
                    Next Quote
                </button>
            </div>
        </>
    )
}; 