import { useForm } from "../../../hooks/useForm"

export const AddTodo = ({onHandleNewTodo}) => {
    
    const {description,onInputChange,onResetForm,valid} = useForm({
        description : ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!(description.length  > 0)) return;
        onHandleNewTodo({id : new Date().getTime(), description : description, done : false})
        onResetForm();
    }
    
    return (
        <>
        <hgroup>
            <h3>Add Todo</h3>
            <h4>So you dont forget it</h4>
        </hgroup>
        <form onSubmit={handleSubmit}>
            <div className="grid">
                <label htmlFor="description">
                    <input type="text"
                        id="description"
                        name="description"
                        placeholder="What's next?"
                        onChange={onInputChange}
                        value={description}
                    />
                </label>
            </div>
            <button type="submit"
                    disabled={!valid}>
                Remember me
            </button>
        </form>
        </>
    )
}
