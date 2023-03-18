import React from "react";
import {GifItem} from "./GifItem";
import {useFetchGif} from "../useFetchGif";
import "../styles.scss"

export const GifGrid = ({category} : any) : JSX.Element => {

    const {fetchedGifs, isLoading} = useFetchGif(category);

    return (
      <>
          <h3>{category}</h3>
          <h2 hidden={!isLoading}>Searching gifs...</h2>
          <div className="parent" hidden={isLoading}>
              {
                  (fetchedGifs.length > 0)
                      ? fetchedGifs.map((gif : any) => <GifItem key={`${gif.id}`} gifData={gif}/>)
                      : <h1>Sin resultados</h1>
              }
          </div>
      </>
    );
}