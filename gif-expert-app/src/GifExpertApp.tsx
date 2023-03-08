import React, {ReactElement, useState} from "react";

export const GifExpertApp = () : ReactElement => {

    const [categories, setCategories] = useState(['One Punch','Saitama'])

    return (
      <div className="container">
        <h1>Gif Expert App</h1>
       <ol>
           {
               categories.map((categorie:string, id:number) => <li key={id}>{categorie}</li>)
           }
       </ol>
      </div>
    );
};

