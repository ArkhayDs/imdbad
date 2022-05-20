import useRegister from "../Hook/useRegister";
import {LocalUserInterface} from "../Interface/LocalUserInterface";

export function Login (payload) {
    return {
        type: 'LOGIN',
        payload: payload
    }
}

export function Register (payload) {
    return {
        type: 'REGISTER',
        payload: payload
    }
}

export const Logout = {
    type: 'LOGOUT'
}