import { useReducer , useEffect} from "react"
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

const initTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
}

export const TodoApp = () => {

    const [todos, dispatchTodos] = useReducer(todoReducer, initialState,initTodos);      
    
    //Handle todos changes
    useEffect(() => {
        
        localStorage.setItem('todos',JSON.stringify([...todos]) ?? [])
            
        return () => {}
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = {
            type : '[TODO] addTodo',
            payload : todo
        }
        dispatchTodos(action);
    }

    const handleDeleteTodo = (todo) => {
        const action = {
            type : '[TODO] deleteTodo',
            payload : todo
        }
        dispatchTodos(action);
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
                            <TodoList todos={todos} onHandleDeleteTodo={handleDeleteTodo}/>
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
