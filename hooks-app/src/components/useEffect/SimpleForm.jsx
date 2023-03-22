import React, { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username : 'John Doe',
        email    : 'doe@gmail.com'
    });

    const {username,email} = formState;

    const handleInputChange = ({target}) => {
        const {name, value} = target;
        setformState({
            ...formState,
            [name] : value
        })
    }

    return (
        <>
            <h1>Simple Form using useEffect hook</h1>

            <form>
                <div className='grid'>
                    <label htmlFor="username">
                        Username:
                        <input type="text" 
                               id='username'
                               name='username'
                               placeholder='Username'
                               value={username}
                               onChange={handleInputChange}
                        />
                    </label>

                    <label htmlFor="email">
                        Email address:
                        <input type="email" 
                               id='email'
                               name='email'
                               placeholder='Email address'
                               value={email}
                               onChange={handleInputChange}
                        />
                    </label>
                </div>
            </form>
            
            {
                username === 'John Doe' && <Message/>
            }
        </>
    )
}
