import {
    GET_BEGIN,
    GET_FAILED,
    GET_SUCCESS,
    ADD_TODO,
    DELETE_TODO,
    CHANGE_STATUS,
    FAILED,
    GET_DONE_DATA,
    GET_FAILED_DATA
} from './fetchType';


// Types
export const getBegin = () => ({
    type: GET_BEGIN
});

export const getSuccess = (data) => ({
    type: GET_SUCCESS,
    payload: data
});

export const getDone = (data) => ({
    type: GET_DONE_DATA,
    payload: data
});

export const getFail = (data) => ({
    type: GET_FAILED_DATA,
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

export const removeItem = (id) => ({
    type: DELETE_TODO,
    payload: id
});

export const changeStatus = (id) => ({
    type: CHANGE_STATUS,
    payload: id
});
export const failed = (id) => ({
    type: FAILED,
    payload: id
});
// End Types

// Post data to API
export const addTodo = (name) => {
    return dispatch => {
        let now = new Date();
        let data = {
            "name": name,
            "isComplete": false,
            "isFail": true,
            "date":now.toLocaleDateString(),
            "time":now.toLocaleTimeString()
        };
        fetch(`http://10.0.2.2:3000/tasks`,
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
export const deleteTodo = (id) => {
    return dispatch => {
        const url = `http://10.0.2.2:3000/tasks/`;
        fetch(`${url}${id}`, {
                method: 'DELETE'
            }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(removeItem(id));
            })
    }
};

// Get data which they are over from API
export const getTaskDataUnfinished = () => {
    return dispatch => {
        let dataTask = `http://10.0.2.2:3000/tasks`;
        dispatch(getBegin());
        fetch(dataTask, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                dispatch(getSuccess(data));
                dispatch(getDone(data));
                dispatch(getFail(data));
            })
            .catch(error => dispatch(getFailed(error)))
    }
};


// Update the isComplete status
export const updateStatus = (id) => {
    return dispatch => {
        let isFail = {
            "isFail": false
        };
        let data = {
            "isComplete": true
        };
        let trueComplete = true;
        const url = `http://10.0.2.2:3000/tasks/`;
        fetch(`${url}${id}/?isComplete=${trueComplete}&&isFail=${isFail}`,
            {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(changeStatus(id))
            })
    }
};


// Update the fail status
export const updateFailure = (id) => {
    return dispatch => {
        let data = {
            "isFail": false
        };
        let isComplete ={
            "isComplete": false
        }
        let falser = false;
        const url = `http://10.0.2.2:3000/tasks/`;
        fetch(`${url}${id}/?isFail=${falser}&&isComplete=${isComplete}`,
            {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(failed(id))
            })
    }
};
