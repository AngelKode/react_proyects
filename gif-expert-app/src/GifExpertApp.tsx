import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";
import "./styles.scss"

export const GifExpertApp = () : JSX.Element => {

    const [categories, setCategories] = useState(['One Punch','Saitama']);

    const handleNewCategory = (newCategory : string) => {
        if(categories.find((category : string) => category.toUpperCase() === newCategory.toUpperCase())) return;

        setCategories((prevState : string[]) => [newCategory.trim().slice(0,newCategory.length),...prevState])
    }

    return (
      <div className="container">
        <hgroup>
          <h1>Gif Expert App</h1>
          <h2>Using React JS and PicoCSS</h2>
        </hgroup>
        <AddCategory onNewCategory={handleNewCategory}/>
        {
            categories.map((category:string) => (
                <GifGrid category={category} key={category}/>
            ))
        }
      </div>
    );
};

