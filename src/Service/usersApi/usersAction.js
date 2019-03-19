import {BEGIN_USER, ADD_USER, FAILED_USER, SUCCESS_USER,CHANGE_THEME} from './usersType';

// Types
export const userBegin = () => ({
    type: BEGIN_USER
});

export const userSuccess = (users) => ({
    type: SUCCESS_USER,
    payload: users
});

export const userFailed = (error) => ({
    type: FAILED_USER,
    payload: error
});

export const addUser = (name) => ({
    type: ADD_USER,
    payload: name
});

export const themeChanger =()=>({
    type:CHANGE_THEME,
})


//Get data from endpoint
export const getUserData = () => {
    return dispatch => {
        let url = `http://10.0.2.2:4000/users`;
        dispatch(userBegin());
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                dispatch(userSuccess(data))
            })
            .catch(error => dispatch(userFailed(error)))
    }
};



//Post data to endpoint
export const addUserData = (username, email, password) => {
    return dispatch => {
        let datas = {
            "username": username,
            "email": email,
            "password": password
        };
        let url = `http://10.0.2.2:4000/users`;
        fetch(`${url}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(response => response.json())
            .then(datas => {
                dispatch(addUser(data))
            })
            .catch(error => error)
    }
}
