import { useEffect, useState } from "react";

export const useFetch = (apiUrl) => {

    const [{data,isLoading,hasError}, setState] = useState({
        data      : null,
        isLoading : true,
        hasError  : null 
    })

    const getFetch = async () => {

        setState((prevState) => {
            return {
                ...prevState,
                isLoading : true
            }
        })

        try {
            const apiResponse = await fetch(apiUrl,{method : 'GET'});
            const responseData = await apiResponse.json();

            setState((prevState) => {
                return {
                    ...prevState,
                    data      : responseData,
                    isLoading : false
                }
            })

        } catch (error) {

            setState((prevState) => {
                return {
                    ...prevState,
                    hasError : error
                }
            })

        }
        
    }

    useEffect(() => {
        getFetch();
        return () => {
            
        }
    }, [apiUrl])
    

    return {
        data,
        isLoading,
        hasError,
        getFetch
    };
}