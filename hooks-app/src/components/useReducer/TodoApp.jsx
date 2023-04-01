import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { AddTodo,TodoList } from "./components";

const initialState = [
    {
        id          : new Date().getTime(),
        description : 'Comprar leche',
        done        : true
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
    
    const handleNewTodo = (todo) => {
        console.log(todo);
    }

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
                            <TodoList todos={todos}/>
                        </section>
                        <section>
                            <AddTodo onHandleNewTodo={handleNewTodo}/>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    )
}
