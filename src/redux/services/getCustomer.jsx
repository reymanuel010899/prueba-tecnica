
import axios from 'axios'
import { CUSTOMER_SUCCESS_DETAIL, CUSTOMER_FAILURE_DTAIL } from "../reducers/Types";
const  get_doc = (pk) => async (dispatch) => {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/customer/detail/${pk}`);
    

        if (res.status == 200) {
            
            dispatch({
                type: CUSTOMER_SUCCESS_DETAIL,
                payload: res.data,
            });
            return Promise.resolve("sucess");
        }  else {
            dispatch({
                type: CUSTOMER_FAILURE_DTAIL,
                payload: null,
            });
            return Promise.reject("FAILURE");
        }
    }
    catch(err){
        dispatch({
            type: CUSTOMER_FAILURE_DTAIL,
            payload: null,
        });
        return Promise.reject("FAILURE");
    }
 }

 export default get_doc