import React, {ReactElement, useState} from "react";
import {AddCategory} from "./components/AddCategory";

export const GifExpertApp = () : ReactElement => {

    const [categories, setCategories] = useState(['One Punch','Saitama']);

    const handleNewCategory = (newCategory : string) => {
        if(categories.find((category : string) => category === newCategory.toUpperCase())) return;

        setCategories((prevState : string[]) => [newCategory.trim().slice(0,newCategory.length),...prevState])
    }

    return (
      <div className="container">
        <hgroup>
          <h1>Gif Expert App</h1>
          <h2>Using React JS and PicoCSS</h2>
        </hgroup>
        <AddCategory onNewCategory={handleNewCategory}/>
        <ol>
           {
               categories.map((category:string) => {
                   return <li key={category.toUpperCase()}>{ category }</li>;
               })
           }
        </ol>
      </div>
    );
};

