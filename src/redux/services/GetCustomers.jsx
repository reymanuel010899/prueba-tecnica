import axios from 'axios'
import { CUSTOMER_FAILURE, CUSTOMER_SUCCESS } from "../reducers/Types";

const  get_customers = () => async (dispatch) => {
    try {
        const res = await axios.get('http://127.0.0.1:8000/customer/list');

        if (res.status === 200) {
            dispatch({
                type: CUSTOMER_SUCCESS,
                payload: res.data,
            });
            return Promise.resolve("sucess");
        }  else {
            dispatch({
                type: CUSTOMER_FAILURE,
                payload: res.data,
            });
            return Promise.reject("FAILURE");
        }
    }
    catch(err){
        dispatch({
            type: CUSTOMER_FAILURE,
            payload: res.data,
        });
        return Promise.reject(err);
    }
 }

export default get_customers
