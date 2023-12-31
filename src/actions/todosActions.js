import axios from "axios";

import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILED } from "../constains/todoConstains";

export const getAllTodos = () => async(dispatch) =>{
    dispatch({type: GET_TODOS_REQUEST});
    try {
        const res = await axios("https://jsonplaceholder.typicode.com/posts");
        dispatch({type:GET_TODOS_SUCCESS, payload: res.data});

    }
    catch(error){
        dispatch({type: GET_TODOS_FAILED, payload: error.message});
    }
    
};