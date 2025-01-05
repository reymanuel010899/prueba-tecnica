import axios from 'axios'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducers/Types';
import LoginReducer from '../reducers/Login';


const login = (username, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({
        username,
        password
    });

    try {
        const res = await axios.post('http://127.0.0.1:8000/user/login/', body, config);
        if (res.status === 200) {
            localStorage.setItem('activated', 'true')
            localStorage.setItem('Token', res.data.user.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            dispatch({
                type: LOGIN_SUCCESS,
                 payload: res.data.user,
            });
            return Promise.resolve("sucess");
    
        } else {
            const error = data.message || 'Login failed';
            dispatch({
                type: LOGIN_FAILURE,
                payload: null,
            });  
            return Promise.reject(new Error(error));
        }
    }
    catch(err){
        dispatch({
            type: LOGIN_FAILURE,
            payload: null,
        });
        return Promise.reject(new Error(err));
    }
 }
export default login 

