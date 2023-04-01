export const TodoItem = ({todo}) => {
    return (
        <li key={todo.id} style={{'listStyle':'none'}}>
            <nav>
                <ul>
                    <li><strong>{todo.description}</strong></li>
                </ul>
                <ul>
                    {
                        !todo.done && 
                        <li>
                            <a href="#" 
                            className="contrast"
                            role="button">Delete
                            </a>
                        </li>
                    }
                    {
                        todo.done && 
                        <li>
                            <a>Done</a>
                        </li>
                    }
                </ul>
            </nav>
            <hr />
        </li>
    )
}
