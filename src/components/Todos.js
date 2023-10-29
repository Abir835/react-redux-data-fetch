import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../actions/todosActions";

const Todos = () =>{
    const {isLoading, todos, error} = useSelector(state=> state);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getAllTodos());
    }, []);
    
    return(
        <div>
            <h1>Todos App</h1>
            {isLoading && <h3>Loading........</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos && todos.map((todo) =>{
                    return(
                        <article>
                            <h4>{todo.id}</h4>
                            <h4>{todo.title}</h4>
                            <h5>{todo.body}</h5>
                        </article>
                    )
                })}
            </section>
        </div>
    )
};

export default Todos;