
const initialState = [
    {
        id   : 1,
        todo : 'Comprar café',
        done : false
    },
    {
        id   : 2,
        todo : 'Comprar leche',
        done : false
    }
]

const todoReducer = (state = initialState, action = {}) => {

    if(action?.type === '[TODO] add todo'){
        return [...state,action?.payload]
    }
    
    return state;
}

let todos = todoReducer();

const newTodo = {
    id    : 2,
    todo  : 'Lavar el carro',
    donde : false
}

const addTodoAction = {
    type    : '[TODO] add todo',
    payload : newTodo
} 

todos = todoReducer(todos, addTodoAction);
console.log(todos);
