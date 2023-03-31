import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id          : new Date().getTime(),
        description : 'Comprar leche',
        done        : false
    },
    {
        id          : new Date().getTime() + 1,
        description : 'Comprar café',
        done        : false
    },
    {
        id          : new Date().getTime() + 2,
        description : 'Comprar pan',
        done        : false
    }
]

export const TodoApp = () => {

    const [todos, dispatchTodos] = useReducer(todoReducer, initialState);      
    
    return (
        <main>
            <div role="document">
                <section>
                    <hgroup>
                        <h1>Todo App</h1>
                        <h2>Using reducers</h2>
                    </hgroup>
                    <div className="grid">
                        <section>
                            <ul style={{'paddingLeft':'0'}}>
                                {
                                    initialState.map((todo) => (
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
                                    ))
                                }
                            </ul>
                        </section>
                        <section>
                            <hgroup>
                                <h3>Add Todo</h3>
                                <h4>So you dont forget it</h4>
                            </hgroup>
                            <form>
                                <div className="grid">
                                    <label htmlFor="newTodo">
                                        <input type="text"
                                            id="newTodo"
                                            name="newTodo"
                                            placeholder="What's next?"
                                        />
                                    </label>
                                </div>
                                <button type="submit">
                                    Remember me
                                </button>
                            </form>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    )
}
