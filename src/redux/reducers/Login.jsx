import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./Types";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    error: null,
};

const LoginReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: payload,
                error: null,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                user: null, // Resetea el usuario
                error: payload, // Guarda el mensaje de error
            };

        default:
            return state; // Devuelve el estado actual por defecto
    }
};
export default LoginReducer;
