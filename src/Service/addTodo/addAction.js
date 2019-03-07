import {ADD_TODO} from "./addType";
import {GET_SUCCESS,GET_FAILED,GET_BEGIN} from "../fetchApi/fetchType";
import {getSuccess} from "../fetchApi/fetchAction";


export const add = (name) => ({
    type: ADD_TODO,
    payload: name
});

export const addTodo = (name) => {
    return dispatch=> {
        let data = {
            "name": name,
        };
        fetch(`http://10.0.2.2:3000/user`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(add(data))
            })
            .catch(error => error)
    }
};

