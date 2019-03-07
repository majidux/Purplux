import {ADD_TODO} from "./addType";



export const add = (text) => ({
    type: ADD_TODO,
    payload: text
});

export const addTodo = (name) => {
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
        // .then(function (response) {
        //     return response.json();
        // })
        // .then(function (data) {
        //     add(text)
        // })
    
};

