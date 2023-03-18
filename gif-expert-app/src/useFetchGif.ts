import {useEffect, useState} from "react";
import {useGif} from "./helpers/useGif";

export const useFetchGif = (category : any) : any => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchingTimeOut, setFetchingTimeOut] = useState(0);

    const fetchGifs = () => {
        setFetchingTimeOut(
            setTimeout(async () => {
                setGifs(await useGif(category));
                setIsLoading(false);
            },400)
        );
    }

    useEffect(() => {

        fetchGifs();

        return () => {
            clearTimeout(fetchingTimeOut);
        }

    }, [category]);

    return {
        fetchedGifs : gifs,
        isLoading
    }
}