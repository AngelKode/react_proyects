import { useEffect , useReducer} from "react"
import { todoReducer } from "../todoReducer";

const initTodos = () => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
}

export const useTodos = (initialTodos = []) => {
    //Reducer for todos management
    const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos ?? [], initTodos); 

    //Handle todos changes
    useEffect(() => {
        
        localStorage.setItem('todos',JSON.stringify([...todos]) ?? []);
            
        return () => {}
    }, [todos]);
    
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

    const handleToggleTodo = (todoId) => {
        const action = {
            type : '[TODO] toggleTodo',
            payload : todoId
        }
        dispatchTodos(action);
    }

    const todosInformation = {
        todosCount : () => todos?.length ?? 0,
        doneTodosCount : () => todos.filter((todo) => todo?.done ?? false).length,
        pendingTodosCount : () => todos.filter((todo) => !todo?.done ?? false).length

    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosInformation
    }
    
} 