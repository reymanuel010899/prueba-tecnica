import { CUSTOMER_SUCCESS_DETAIL, CUSTOMER_FAILURE_DTAIL} from "./Types";
const initialState = {
    customer: null,
    error: null,
};

// Reducer para Login
const get_doc = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CUSTOMER_SUCCESS_DETAIL:
            return {
                ...state,
                customer: payload,
                error: null,
            };
        case CUSTOMER_FAILURE_DTAIL:
            return {
                ...state,
                customer: null, // Resetea el usuario
                error: payload, // Guarda el mensaje de error
            };

        default:
            return state; // Devuelve el estado actual por defecto
    }
};

export default get_doc;
