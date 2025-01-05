import { CUSTOMER_FAILURE, CUSTOMER_SUCCESS } from "./Types";

const initialState = {
    customers: null,
    error: null,
};

// Reducer para Login
const get_customers = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case CUSTOMER_SUCCESS:
            return {
                ...state,
                customers: payload,
                error: null,
            };
        case CUSTOMER_FAILURE:
            return {
                ...state,
                customers: null, // Resetea el usuario
                error: payload, // Guarda el mensaje de error
            };

        default:
            return state; // Devuelve el estado actual por defecto
    }
};

export default get_customers;
