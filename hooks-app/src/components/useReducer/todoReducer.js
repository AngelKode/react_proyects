export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case '[TODO] addTodo':
            return [
                ...initialState,
                action.payload
            ];
        case '[TODO] deleteTodo':
            console.log(JSON.stringify(action)+'eliminado');
            return initialState.filter((todo) => todo?.id !== action.payload.id);
        default:
            throw new Error('Default not implemented yet')
    }
}