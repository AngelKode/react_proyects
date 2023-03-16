import React, {KeyboardEventHandler, ReactElement, useState} from "react";

export const GifExpertApp = () : ReactElement => {

    const [categories, setCategories] = useState(['One Punch','Saitama']);
    const [category, setCategory] = useState('');

    const onAddCategory = () => {
        setCategories((prevState) => [...prevState, category]);
        setCategory('');
    }
    const handleDataEnter = (event: any) => {
        event.preventDefault();
        setCategory(`${event.target.value}`);
    }

    return (
      <div className="container">
        <hgroup>
          <h1>Gif Expert App</h1>
          <h2>Using React JS and PicoCSS</h2>
        </hgroup>
        <form>
          <label htmlFor="category">Search category</label>
          <input type="text" id="category" name="category" placeholder="Category" required onChange={handleDataEnter} value={category}/>
        </form>
        <button type={"button"} onClick={onAddCategory}>Add Category</button>
        <ol>
           {
               categories.map((category:string, id:number) => {
                   return <li key={id}>{ category }</li>;
               })
           }
        </ol>
      </div>
    );
};

