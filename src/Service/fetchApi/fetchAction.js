import {GET_BEGIN, GET_FAILED, GET_SUCCESS, ADD_TODO, DELETE_TODO} from './fetchType';


// Types
export const getBegin = () => ({
    type: GET_BEGIN
});

export const getSuccess = (data) => ({
    type: GET_SUCCESS,
    payload: data
});

export const getFailed = (error) => ({
    type: GET_FAILED,
    payload: error
});

export const add = (name) => ({
    type: ADD_TODO,
    payload: name
});

export const _delete = (id) => ({
    type: DELETE_TODO,
    payload:id
});
// End Types

// Post data to API
export const addTodo = (name) => {
    return dispatch => {
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

//Delete an item from API
// export const deleteTodo = (id)=>{
//     return dispatch=>{
//         // let deleteData ={
//         //     "id":id
//         // };
//         fetch(`http://10.0.2.2:3000/user?id=${id}`,
//             {
//                 method:'DELETE',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//             }
//             )
//             .then(response=>response.json())
//             .then(data =>{
//                 dispatch(_delete(data))
//             })
//     }
// };

// Get data from API
export const getUsersData = () => {
    return dispatch => {
        let dataUser = `http://10.0.2.2:3000/user`;
        dispatch(getBegin());
        fetch(dataUser, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                dispatch(getSuccess(data))
            })
            .catch(error => dispatch(getFailed(error)))
    }
};

