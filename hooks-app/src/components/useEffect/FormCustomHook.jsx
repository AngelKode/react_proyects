import React, { useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm'

export const FormCustomHook = () => {

    const { formState : {username,email,password}, handleInputChange} = useForm({
        username : '',
        email    : '',
        password : ''
    })

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

                    <label htmlFor="password">
                        Username:
                        <input type="password" 
                               id='password'
                               name='password'
                               placeholder='Password'
                               value={password}
                               onChange={handleInputChange}
                        />
                    </label>
                </div>
            </form>
        </>
    )
}
