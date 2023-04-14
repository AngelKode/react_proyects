export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case '[TODO] addTodo':
            return [
                ...initialState,
                action.payload
            ];
        case '[TODO] deleteTodo':
            return initialState.filter((todo) => todo?.id !== action.payload.id);
        case '[TODO] toggleTodo':
            return initialState.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done : !todo.done
                    }
                }
                return todo;
            })
        default:
            throw new Error('Default not implemented yet')
    }
}