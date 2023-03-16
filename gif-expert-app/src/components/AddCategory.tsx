import React, {ChangeEvent, FormEvent, useState} from "react";

export const AddCategory = ({onNewCategory} : any) =>  {

    const [category, setCategory] = useState('');

    const handleDataEnter = (event: ChangeEvent<HTMLInputElement>) => {
        setCategory(`${event.target.value}`);
    }

    const handleOnSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onNewCategory(category.trim());
        setCategory('');
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="category">Search category</label>
            <input type="text"
                   id="category"
                   name="category"
                   placeholder="Category"
                   value={category}
                   onChange={handleDataEnter}
                   autoComplete="off"
                   required
                   minLength={2} />
            <button type={"submit"}>Add Category</button>
        </form>
    );
};
