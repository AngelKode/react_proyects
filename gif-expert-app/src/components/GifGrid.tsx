import React, { useEffect, useState} from "react";
import {useGif} from "../helpers/useGif"
import {GifItem} from "./GifItem";
import "../styles.scss"

export const GifGrid = ({category} : any) : JSX.Element => {

    const [gifImages, setGifImages] = useState<any>([]);

    const apiRequest = async ()=> {
        setGifImages(await useGif(category));
    }
    useEffect(() => {

        apiRequest();

        return () => {

        }

    },[category]);

    return (
      <>
          <h3>{category}</h3>
          <div className="parent">

              {
                  (gifImages.length > 0)
                      ? gifImages.map((gif : any) => <GifItem key={`${gif.id}`} gifData={gif}/>)
                      : <h1>Sin resultados</h1>
              }
          </div>
      </>
    );
}