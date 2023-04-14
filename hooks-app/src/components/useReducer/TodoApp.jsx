import { AddTodo,TodoList } from "./components";
import { useTodos } from "./hooks/useTodos";

export const TodoApp = () => {
 
    const {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosInformation} = useTodos([]);
    const {todosCount,doneTodosCount,pendingTodosCount} = todosInformation;

    return (
        <main>
            <div role="document">
                <section>
                    <hgroup>
                        <h1>Todo App</h1>
                        <h2>Using reducers</h2>
                    </hgroup>
                    <kbd style={{'marginRight':'10px'}}>All todos: <i>{todosCount()}</i></kbd>
                    <kbd style={{'marginRight':'10px'}}>Done: <i>{doneTodosCount()}</i></kbd>
                    <kbd>Pending: <i>{pendingTodosCount()}</i></kbd>
                    <div className="grid">
                        <section>
                            <TodoList todos={todos} 
                                      onHandleDeleteTodo={handleDeleteTodo}
                                      onHandleToggleTodo={handleToggleTodo}
                            />
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
