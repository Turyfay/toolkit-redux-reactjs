import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "../store/apis/todosApi"

export const Todoapp = () => {

    const [todoId, setTodoId] = useState(1)
    /*const { data: todos = [], isLoading } = useGetTodosQuery();*/
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

            <pre>{JSON.stringify(todo)}</pre>
            <button
            onClick={()=> setTodoId( state => state - 1)}
            >
                Prev Todo
            </button>
            <button
             onClick={()=> setTodoId( state => state + 1)}
            >
                Next todo
            </button>
            {/*  <ul>
            {
                todos.map(todo =>(
                    <li key={todo.id} >{todo.title}</li>
                ))
            }
        </ul> */}
        </>
    )
}
