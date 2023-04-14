export const TodoItem = ({todo, handleDeleteTodo, onToggleTodo}) => {

    const handleDeleteTodoButton = (event) => {
        event.preventDefault();
        handleDeleteTodo(todo);
    }

    const handleToggleTodoClick = (event) => {
        event.preventDefault();
        onToggleTodo((todo.id) ?? 0);
    }

    return (
        <li key={todo.id} style={{'listStyle':'none'}}>
            <nav>
                <ul onClick={handleToggleTodoClick}>
                    {
                        todo.done 
                            ? <li style={{'textDecoration':'line-through'}}><em>{todo.description}</em></li>
                            : <li><strong>{todo.description}</strong></li>
                    }
                </ul>
                <ul>
                    {
                        todo.done 
                            ? 
                            <li>
                                <a>Done</a>
                             </li>
                            :
                            <li>
                                <a href="#" 
                                className="contrast"
                                role="button"
                                onClick={handleDeleteTodoButton}
                                data-tooltip={"Delete "+ (todo?.description ?? "") + " Todo"}>Delete
                                </a>
                            </li>
                    }
                </ul>
            </nav>
            <hr />
        </li>
    )
}
