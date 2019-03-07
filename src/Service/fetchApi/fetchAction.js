import {GET_BEGIN, GET_FAILED, GET_SUCCESS,ADD_TODO} from './fetchType';

export const getBegin = () => ({
    type: GET_BEGIN
});

export const getSuccess = (data) => ({
    type: GET_SUCCESS,
    payload: data
});
export const getFailed = () => ({
    type: GET_FAILED
});






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

