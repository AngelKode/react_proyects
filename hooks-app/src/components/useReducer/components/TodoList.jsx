import { TodoItem } from "./TodoItem"

export const TodoList = ({todos}) => {
    return (
        <ul style={{'paddingLeft':'0'}}>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            }
        </ul>
    )
}
